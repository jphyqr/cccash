import React, { Component } from "react";
import { Table, Button, Progress } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";

class QuoteRow extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const loggedin = accounts[0];

    const { address } = props.query;
    const campaign = Campaign(address);

    //const request = await campaign.methods.requests(this.props.id).call();
    //const hasAlreadyApproved = true;
    //  if (request.votes(loggedin) > 0) hasAlreadyApproved = true;
  }

  state = {
    loading: false
  };

  onFinalize = async () => {
    event.preventDefault();
    this.setState({ loading: true });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.purchaseCostEstimate(this.props.id).send({
        from: accounts[0]
      });
    } catch (err) {}

    this.setState({ loading: false });
    Router.pushRoute(`/campaigns/${this.props.address}`);
  };

  render() {
    const { Row, Cell } = Table;
    const { id, estimate, isManager, loggedin, address } = this.props;
    const isPurchased = estimate.purchased;

    return (
      <Row disabled={estimate.purchased} positive={!estimate.purchased}>
        <Cell>{id}</Cell>
        <Cell>{estimate.description}</Cell>
        <Cell>{web3.utils.fromWei(estimate.quote, "ether")}</Cell>
        <Cell>{web3.utils.fromWei(estimate.price, "ether")}</Cell>
        <Cell>{estimate.owner}</Cell>
        <Cell>
          {isPurchased || !isManager ? null : (
            <Button
              loading={this.state.loading}
              color="teal"
              basic
              onClick={this.onFinalize}
            >
              Purchase
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default QuoteRow;
