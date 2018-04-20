//QUOTES INDEX

import React, { Component } from "react";
import { Button, Table, Progress } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";

import web3 from "../../../ethereum/web3";
import QuoteRow from "../../../components/QuoteRow";
import QuoteForm from "../../../components/QuoteForm";

class QuoteIndex extends Component {
	static async getInitialProps(props) {
		const accounts = await web3.eth.getAccounts();
		const loggedin = accounts[0];

		const { address } = props.query;
		const campaign = Campaign(address);

		const manager = await campaign.methods.manager().call();
		let isManager = false;
		if (loggedin == manager) {
			isManager = true;
		}
		const estimateRequestCount = await campaign.methods
			.getEstimatePendingCount()
			.call();

		const estimateRequests = await Promise.all(
			Array(parseInt(estimateRequestCount))
				.fill()
				.map((element, index) => {
					return campaign.methods.costEstimatesPending(index).call();
				})
		);

		return {
			address,
			isManager,
			loggedin,
			estimateRequests,
			estimateRequestCount
		};
	}

	renderQuoteRows() {
		return this.props.estimateRequests.map((request, index) => {
			return (
				<QuoteRow
					key={index}
					id={index}
					estimate={request}
					address={this.props.address}
					isManager={this.props.isManager}
				/>
			);
		});
	}

	render() {
		const { Header, Row, HeaderCell, Body } = Table;

		return (
			<Layout>
				<Link route={`/campaigns/${this.props.address}/`}>
					<a>Back</a>
				</Link>

				{this.props.hasAQuote ? null : (
					<QuoteForm address={this.props.address} />
				)}

				<h3>Quotes</h3>
				<Table>
					<Header>
						<Row>
							<HeaderCell>ID</HeaderCell>
							<HeaderCell>Description</HeaderCell>
							<HeaderCell>Estimate</HeaderCell>
							<HeaderCell>Price</HeaderCell>
							<HeaderCell>Owner</HeaderCell>
							<HeaderCell>Finalize</HeaderCell>
						</Row>
					</Header>
					<Body>{this.renderQuoteRows()}</Body>
				</Table>
			</Layout>
		);
	}
}

export default QuoteIndex;
