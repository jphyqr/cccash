const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
	"muscle clinic oak exclude despair aim bench immune describe choice ship imitate",
	"https://rinkeby.infura.io/HZTrSirvBRfaaAo7fQhe"
);

const web3 = new Web3(provider);

//2 pieces of async code, cant use await outside function, so need function

//only need function to call async
const deploy = async () => {
	//get list of accounts

	const accounts = await web3.eth.getAccounts();

	console.log("attemption to deploy from account", accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: "6000000", from: accounts[0] });

	console.log("Contract deployed to", result.options.address);
};
deploy();

//deployed to 0x404f2a129ea96b086c50190e975F781bC669dCB9
