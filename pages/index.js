import React, { Component } from "react";
import { Card, Button, Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		const loggedin = "<div>yes</div>";
		return { campaigns, loggedin };
	}

	state = {
		visible: false
	};
	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	renderCampaigns() {
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
						<a>View Campaign</a>
					</Link>
				),
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	render() {
		const { visible } = this.state;
		return (
			<Layout>
				<Icon
					name="content"
					size="big"
					onClick={this.toggleVisibility}
				/>
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						animation="scale down"
						width="thin"
						visible={visible}
						icon="labeled"
						vertical
						inverted
					>
						<Menu.Item name="create campaign">
							<Link route="/campaigns/new">
								<a>
									<Icon
										name="add circle"
										onClick={this.toggleVisibility}
										size="big"
									/>
								</a>
							</Link>
						</Menu.Item>
						<Menu.Item name="gamepad">
							<Icon name="gamepad" />
							Games
						</Menu.Item>
						<Menu.Item name="camera">
							<Icon name="camera" />
							Channels
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<h3>Open Campaigns</h3>

							<Link route="/campaigns/new">
								<a>
									<Button
										floated="right"
										content="Create Campaign"
										icon="add circle"
										primary
									/>
								</a>
							</Link>

							{this.renderCampaigns()}
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Layout>
		);
	}
}

export default CampaignIndex;
