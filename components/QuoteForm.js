//QuoteForm.js;
import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
class QuoteForm extends Component {
	state = {
		value: "",
		errorMessage: "",
		description: "",
		price: "",
		loading: false
	};
	static async getInitialProps(props) {
		const { address } = props.query;

		return { address };
	}
	onSubmit = async event => {
		event.preventDefault();
		const campaign = Campaign(this.props.address);

		this.setState({ loading: true, errorMessage: "" });

		try {
			const accounts = await web3.eth.getAccounts();

			await campaign.methods
				.createCostEstimate(
					this.state.description,
					web3.utils.toWei(this.state.value, "ether"),
					web3.utils.toWei(this.state.price, "ether")
				)
				.send({ from: accounts[0] });

			Router.replaceRoute(`/campaigns/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({
			loading: false,
			value: "",
			price: "",
			description: ""
		});
	};

	render() {
		return (
			<div>
				<h3>Quote This Project</h3>
				<Form
					onSubmit={this.onSubmit}
					error={!!this.state.errorMessage}
				>
					<Form.Field>
						<label> Scope </label>
						<Input
							value={this.state.description}
							onChange={event =>
								this.setState({
									description: event.target.value
								})
							}
						/>
					</Form.Field>
					<Form.Field>
						<label> Estimate </label>
						<Input
							value={this.state.value}
							onChange={event =>
								this.setState({ value: event.target.value })
							}
							label="ether"
							labelPosition="right"
						/>
					</Form.Field>
					<Form.Field>
						<label> Price </label>
						<Input
							value={this.state.price}
							onChange={event =>
								this.setState({ price: event.target.value })
							}
							label="ether"
							labelPosition="right"
						/>
					</Form.Field>
					<Message
						error
						header="Oops!"
						content={this.state.errorMessage}
					/>
					<Button primary loading={this.state.loading}>
						{" "}
						Submit Quote!{" "}
					</Button>
				</Form>
			</div>
		);
	}
}

export default QuoteForm;
