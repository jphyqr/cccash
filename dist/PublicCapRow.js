import React, { Component } from "react";
import { Table, Button, Progress } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
	onApprove = async () => {
		const campaign = Campaign(this.props.address);

		const accounts = await web3.eth.getAccounts();
		await campaign.methods
			.approvePublicCapIncreaseRequest(this.props.id)
			.send({
				from: accounts[0]
			});
	};

	onFinalize = async () => {
		const campaign = Campaign(this.props.address);

		const accounts = await web3.eth.getAccounts();
		await campaign.methods
			.finalizePublicCapIncreaseRequest(this.props.id)
			.send({
				from: accounts[0]
			});
	};

	render() {
		const { Row, Cell } = Table;
		const { id, request, totalShares } = this.props;
		const votesNeeded = totalShares / 2;
		const readyToFinalize = request.votingCount > votesNeeded;
		const status = request.votingCount * 100 / votesNeeded;

		return (
			<Row
				disabled={request.complete}
				positive={readyToFinalize && !request.complete}
			>
				<Cell>{id}</Cell>
				<Cell>{request.description}</Cell>
				<Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
				<Cell>
					<Progress
						percent={status}
						indicating
						disabled={request.complete}
					/>
				</Cell>
				<Cell>
					{request.complete ? null : (
						<Button color="green" basic onClick={this.onApprove}>
							Approve
						</Button>
					)}
				</Cell>
				<Cell>
					{request.complete ? null : (
						<Button color="teal" basic onClick={this.onFinalize}>
							Finalize
						</Button>
					)}
				</Cell>
			</Row>
		);
	}
}

export default RequestRow;
