//Campaign.test.js;
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
require("events").EventEmitter.prototype._maxListeners = 1000;

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: "6000000" });

	await factory.methods.createCampaign("10", "10000").send({
		from: accounts[0],
		gas: "6000000"
	});

	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
	);
});

describe("Before Campaign is Open Tests", () => {
	it("deploys a factory and a campaign", () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it("marks caller as the campaign manager", async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it("manager can create public fund raising request, must be approved and finalized and > SU", async () => {
		await campaign.methods
			.createPublicCapIncreaseRequest("not enough", "9000")
			.send({
				from: accounts[0],
				gas: "1000000"
			});

		const request = await campaign.methods
			.publicCapIncreaseRequests(0)
			.call();
		assert.equal("not enough", request.description);

		try {
			await campaign.methods.finalizePublicCapIncreaseRequest(0).send({
				from: accounts[0],
				gas: "1000000"
			});
			assert(false);
		} catch (err) {
			assert(err);
		}

		await campaign.methods.approvePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		await campaign.methods.finalizePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		const capSpace = await campaign.methods.capSpace().call();
		assert.equal("9000", capSpace);

		try {
			await campaign.methods
				.createRequest("pay 1", "1000", accounts[1])
				.send({
					from: accounts[0],
					gas: "1000000"
				});
			assert(false);
		} catch (err) {
			assert(err);
		}
	});

	it("Start up Min // Accepts Donations // Cap Updated // Requests Created // Requested Voted on", async () => {
		await campaign.methods
			.createPublicCapIncreaseRequest("start up", "10000")
			.send({
				from: accounts[0],
				gas: "1000000"
			});
		const request2 = await campaign.methods
			.publicCapIncreaseRequests(0)
			.call();

		assert.equal("start up", request2.description);

		await campaign.methods.approvePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		await campaign.methods.finalizePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		const capSpace = await campaign.methods.capSpace().call();
		assert.equal("10000", capSpace);

		await campaign.methods.contributePublic().send({
			value: "9000",
			from: accounts[0]
		});

		//cap space till 10000 because donation not approved
		const updatedCapSpace = await campaign.methods.capSpace().call();
		assert.equal("1000", updatedCapSpace);

		try {
			await campaign.methods
				.createRequest("pay 1", "1000", accounts[1])
				.send({
					from: accounts[0],
					gas: "1000000"
				});
			assert(false);
		} catch (err) {
			assert(err);
		}

		try {
			await campaign.methods.contributePublic().send({
				value: "9000",
				from: accounts[0]
			});
			assert(false);
		} catch (err) {
			assert(err);
		}

		await campaign.methods.contributePublic().send({
			value: "1000",
			from: accounts[0]
		});

		await campaign.methods
			.createRequest("pay 1", "1000", accounts[1])
			.send({
				from: accounts[0],
				gas: "1000000"
			});
		const newReq = await campaign.methods.requests(0).call();
		assert.equal("pay 1", newReq.description);
	});
});

describe("Campaign Opened - Donate/Requests/Tasks Tests", () => {
	beforeEach(async () => {
		accounts = await web3.eth.getAccounts();

		factory = await new web3.eth.Contract(
			JSON.parse(compiledFactory.interface)
		)
			.deploy({ data: compiledFactory.bytecode })
			.send({ from: accounts[0], gas: "6000000" });

		await factory.methods
			.createCampaign("10", web3.utils.toWei("15", "ether"))
			.send({
				from: accounts[0],
				gas: "6000000"
			});

		[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
		campaign = await new web3.eth.Contract(
			JSON.parse(compiledCampaign.interface),
			campaignAddress
		);
	});

	it("everyone has proper starting shares and balance", async () => {
		await campaign.methods
			.createPublicCapIncreaseRequest(
				"start up",
				web3.utils.toWei("15", "ether")
			)
			.send({
				from: accounts[0],
				gas: "1000000"
			});

		await campaign.methods.approvePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		await campaign.methods.finalizePublicCapIncreaseRequest(0).send({
			from: accounts[0],
			gas: "1000000"
		});

		await campaign.methods.contributePublic().send({
			value: web3.utils.toWei("5", "ether"),
			from: accounts[0]
		});

		await campaign.methods.contributePublic().send({
			value: web3.utils.toWei("5", "ether"),
			from: accounts[1]
		});
		await campaign.methods.contributePublic().send({
			value: web3.utils.toWei("5", "ether"),
			from: accounts[2]
		});

		const managerShares = await campaign.methods.shares(accounts[0]).call();
		const account2Shares = await campaign.methods
			.shares(accounts[1])
			.call();
		const account3Shares = await campaign.methods
			.shares(accounts[2])
			.call();
		assert.equal("5000000000000000001", managerShares);
		assert.equal("5000000000000000000", account2Shares);
		assert.equal("5000000000000000000", account3Shares);

		let managerBalance = await web3.eth.getBalance(accounts[0]);
		managerBalance = web3.utils.fromWei(managerBalance, "ether");
		managerBalance = parseFloat(managerBalance);
		console.log(managerBalance);
		assert(managerBalance < 96);
		let account1Balance = await web3.eth.getBalance(accounts[1]);
		account1Balance = web3.utils.fromWei(account1Balance, "ether");
		account1Balance = parseFloat(account1Balance);

		assert(account1Balance < 96);
		console.log(account1Balance);
	});

	it("Request to send funds to account1, shares stay same", async () => {
		await campaign.methods
			.createRequest("pay 1", web3.utils.toWei("1", "ether"), accounts[1])
			.send({
				from: accounts[0],
				gas: "5000000"
			});
		//	const newReq = await campaign.methods.requests(0).call();
		//	assert.equal("pay 1", newReq.description);
		// await campaign.methods.approveRequest(0).send({
		// 	from: accounts[0],
		// 	gas: "1000000"
		// });
		// //need more votes
		// try {
		// 	await campaign.methods.finalizeRequest(0).send({
		// 		from: accounts[0],
		// 		gas: "1000000"
		// 	});
		// 	assert(false);
		// } catch (err) {
		// 	assert(err);
		// }
		// await campaign.methods.approveRequest(0).send({
		// 	from: accounts[1],
		// 	gas: "1000000"
		// });
		// await campaign.methods.finalizeRequest(0).send({
		// 	from: accounts[0],
		// 	gas: "1000000"
		// });
		// let account1Balance = await web3.eth.getBalance(accounts[1]);
		// account1Balance = web3.utils.fromWei(account1Balance, "ether");
		// account1Balance = parseFloat(account1Balance);
		// assert(account1Balance > 89);
	});
});

//    it('allows people to contribute money and marks them as approvers', async () => {
//     await campaign.methods.contribute().send({
//       value: '200',
//       from: accounts[1]
//     });
//     const isContributor = await campaign.methods.approvers(accounts[1]).call();
//     assert(isContributor);
//   });

//   it('requires a minimum contribution', async () => {
//     try {
//       await campaign.methods.contribute().send({
//         value: '5',
//         from: accounts[1]
//       });
//       assert(false);
//     } catch (err) {
//       assert(err);
//     }
//   });

//   it('allows a manager to make a payment request', async () => {
//     await campaign.methods
//       .createRequest('Buy batteries', '100', accounts[1])
//       .send({
//         from: accounts[0],
//         gas: '1000000'
//       });
//     const request = await campaign.methods.requests(0).call();

//     assert.equal('Buy batteries', request.description);
//   });

//   it('processes requests', async () => {
//     await campaign.methods.contribute().send({
//       from: accounts[0],
//       value: web3.utils.toWei('10', 'ether')
//     });

//     await campaign.methods
//       .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
//       .send({ from: accounts[0], gas: '1000000' });

//     await campaign.methods.approveRequest(0).send({
//       from: accounts[0],
//       gas: '1000000'
//     });

//     await campaign.methods.finalizeRequest(0).send({
//       from: accounts[0],
//       gas: '1000000'
//     });

//     let balance = await web3.eth.getBalance(accounts[1]);
//     balance = web3.utils.fromWei(balance, 'ether');
//     balance = parseFloat(balance);

//     assert(balance > 104);
//   });
