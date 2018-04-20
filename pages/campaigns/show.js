import React, { Component } from "react";
import {
	Card,
	Grid,
	Button,
	Progress,
	Container,
	Table,
	Sidebar,
	Segment,
	Menu,
	Icon,
	Divider,
	Popup
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

import { Link } from "../../routes";

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const accounts = await web3.eth.getAccounts();
		const { address } = props.query;
		const campaign = Campaign(address);
		const loggedin = accounts[0];
		const manager = await campaign.methods.manager().call();

		let isManager = false;
		if (loggedin == manager) {
			isManager = true;
		}

		const estimate = await campaign.methods.costEstimate().call();

		let hasAQuote = false;

		if (estimate.owner != "") hasAQuote = true;

		const summary = await campaign.methods.getSummary().call();
		const sharesWei = await campaign.methods.shares(loggedin).call();
		const managerSharesWei = await campaign.methods.shares(manager).call();
		const sharesEth = web3.utils.fromWei(sharesWei, "ether");
		const contrib = web3.utils.fromWei(summary[11], "ether");
		const startUpNe = web3.utils.fromWei(summary[12], "ether");
		const totalShares = summary[2];
		const managerRate = summary[10];

		const remainingValue = (100 - managerRate) / 100;
		let equity = sharesWei / totalShares * remainingValue;

		if (loggedin == manager) {
			equity += managerRate / 100;
		}
		equity = equity * 100;

		const managerEquity =
			(managerSharesWei / totalShares * remainingValue +
				managerRate / 100) *
			100;

		console.log(managerEquity);

		const startUpStatus = 100 * contrib / startUpNe;
		//	console.log(startUpStatus);

		return {
			address: props.query.address,
			balance: summary[0],
			manager: summary[1],
			totalShares,
			cap: summary[3],
			capSpace: summary[4],
			isOpen: summary[5],
			isFundraising: summary[6],
			isSold: summary[7],
			canCashOut: summary[8],
			forSale: summary[9],
			managerRate,
			contrib,
			startUpNe,
			isManager,
			estimate,
			startUpStatus,
			equity,
			managerEquity,
			sharesEth
		};
	}

	state = {
		visible: false,
		icon: "content"
	};
	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	renderCards() {
		const {
			address,
			balance,
			manager,
			totalShares,
			cap,
			capSpace,
			isOpen,
			isFundraising,
			isSold,
			canCashOut,
			forSale,
			managerRate,
			contributions,
			startUpNeeded,
			isManager,
			estimate,
			equity,
			managerEquity,
			sharesEth
		} = this.props;

		let currentState = "";
		let currentStateDescription = "";
		let hasAQuote = false;
		if (estimate > 0) hasAQuote = true;

		if (isFundraising) {
			currentState = "Fundraising";
			currentStateDescription =
				"People may donate to campaign. Funds must be raised to open campaign";
		}
		if (isOpen) {
			currentState = "Open";
			currentStateDescription = "Tasks and requests can be created.";
		}
		if (forSale) {
			currentState = "For Sale";
			currentStateDescription =
				"Campaign is for sale, no tasks can be created.";
		}
		if (isSold) {
			currentState = "Sold";
			currentStateDescription =
				"Campaign is sold. Once finalized, funds can be withdrawn";
		}
		if (canCashOut) {
			currentState = "Cash Out";
			currentStateDescription =
				"Cashout by sending your address to the campaign";
		}

		const items = [
			{
				header: manager,
				meta: "Address of Manager",
				description:
					"The manager created this campaign and can create requests to withdraw money",
				style: { overflowWrap: "break-word" }
			},

			{
				header: currentState,
				meta: "State of Campaign",
				description: currentStateDescription
			},
			{
				header: web3.utils.fromWei(balance, "ether"),
				meta: "Campaign Balance (ether)",
				description:
					"The balance is how much money this campaign has left to spend."
			},
			{
				header: web3.utils.fromWei(capSpace, "ether"),
				meta: "Cap Space",
				description: "Amount of shares available to purchase."
			},
			{
				header: web3.utils.fromWei(estimate.quote, "ether"),
				meta: estimate.description,
				description: "Cost Estimate from " + estimate.owner
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		const { visible, content } = this.state;
		const { Header, Row, HeaderCell, Body } = Table;
		return (
			<Layout>
				{visible ? null : (
					<Icon
						name="content"
						color="blue"
						size="big"
						onClick={this.toggleVisibility}
					/>
				)}
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						animation="scale down"
						direction="top"
						visible={visible}
						inverted
					>
						<Menu.Item name="close">
							<Icon
								name="chevron up"
								onClick={this.toggleVisibility}
							/>
						</Menu.Item>

						<Link route="/">
							<Menu.Item name="home">
								<Icon name="home" />
								Home
							</Menu.Item>
						</Link>
						<Link
							route={`/campaigns/${this.props.address}/requests`}
						>
							<a>
								<Menu.Item name="Requests">
									<Icon name="bullhorn" />
									Requests
								</Menu.Item>
							</a>
						</Link>
						<Link route={`/campaigns/${this.props.address}/quotes`}>
							<a>
								<Menu.Item name="Quotes">
									<Icon name="spy" />
									Quotes
								</Menu.Item>
							</a>
						</Link>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<Divider />
							<Grid>
								<Grid.Row>
									<Grid.Column width={10}>
										{this.renderCards()}
									</Grid.Column>

									<Grid.Column width={6}>
										<Grid.Row />
										<Grid.Row>
											<ContributeForm
												address={this.props.address}
											/>
										</Grid.Row>
										<Grid.Row>
											<div>
												<br />
											</div>
											<Progress
												percent={
													this.props.startUpStatus
												}
												indicating
												progress
											>
												Start Up Goal:{" "}
												{this.props.startUpNe}
												eth
											</Progress>
										</Grid.Row>
										<Progress
											percent={this.props.managerEquity}
											indicating
											progress
										>
											Manager Equity ({" "}
											{this.props.managerRate}% fee)
										</Progress>

										<Progress
											percent={this.props.equity}
											indicating
											progress
										>
											Your equity ( {this.props.sharesEth}{" "}
											eth)
										</Progress>
										<Grid.Row />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column />
								</Grid.Row>

								<Grid.Row />
							</Grid>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Layout>
		);
	}
}

export default CampaignShow;
