import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
	state = {
		managerRate: "", //user input always assume working with a string
		startUpNeeded: "",
		errorMessage: "",
		loading: false
	};

	onSubmit = async event => {
		event.preventDefault(); //dont want to send for mautomatically to the back end server
		//want to create new campaign!!
		//get web3

		//start spinner
		this.setState({ loading: true, errorMessage: "" });
		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createCampaign(
					this.state.managerRate,
					this.state.startUpNeeded
				)
				.send({
					//since running inside browser, MM Can auto calculate gas we need for tx, so dont need to specify gas amt
					//need acount from web3 tho so import web3
					from: accounts[0]
				});

			Router.pushRoute("/");
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	};

	//<Form onSubmit={this.onSubmit}> no () because we dont want to execute it now, but in the future
	render() {
		return (
			<Layout>
				<h3> Create a Campaign </h3>

				<Form
					onSubmit={this.onSubmit}
					error={!!this.state.errorMessage}
				>
					<Form.Field>
						<label> Manager Rate </label>
						<Input
							label="Percentage"
							labelPosition="right"
							value={this.state.managerRate}
							onChange={event =>
								this.setState({
									managerRate: event.target.value
								})
							}
						/>
					</Form.Field>
					<Form.Field>
						<label>Start Up Needed</label>
						<Input
							label="Ether"
							labelPosition="right"
							value={this.state.startUpNeeded}
							onChange={event =>
								this.setState({
									startUpNeeded: event.target.value
								})
							}
						/>
					</Form.Field>
					<Message
						error
						header="Oops!"
						content={this.state.errorMessage}
					/>
					<Button loading={this.state.loading} primary>
						Create!
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;
