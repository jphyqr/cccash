import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getSummary().call();

		return {
			address: props.query.address,
			balance: summary[0],
			manager: summary[3],
			totalShares: summary[4],
			cap: summary[5],
			capSpace: summary[6],
			isOpen: summary[7],
			isFundraising: summary[8],
			isSold: summary[9],
			canCashOut: summary[10],
			forSale: summary[11],
			managerRate: summary[12]
		};
	}

	renderCards() {
		const {
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
			managerRate
		} = this.props;

		let currentState = "";
		let currentStateDescription = "";

		if (isOpen) {
			currentState = "Open";
			currentStateDescription = "Tasks and requests can be created.";
		}
		if (isFundraising) {
			currentState = "Fundraising";
			currentStateDescription =
				"People may donate to campaign. Funds must be raised to open campaign";
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
				header: currentState,
				meta: "State of Campaign",
				description: currentStateDescription
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<h3>Campaign Show</h3>
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>

						<Grid.Column width={6}>
							<ContributeForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<Link
								route={`/campaigns/${
									this.props.address
								}/requests`}
							>
								<a>
									<Button primary>View Requests</Button>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>
		);
	}
}

export default CampaignShow;
