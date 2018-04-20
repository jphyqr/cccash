import React, { Component } from "react";
import { Table, Button, Progress, Label } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";
import { Link } from "../routes";

class RequestRow extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const loggedin = accounts[0];

    const { address } = props.query;
    const campaign = Campaign(address);
  }

  state = {
    loading: false
  };

  onApprove = async () => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    } catch (err) {}
    this.setState({ loading: false });
    Router.pushRoute("/");
  };

  onFinalize = async () => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    } catch (err) {}

    this.setState({ loading: false });
    Router.pushRoute("/");
  };

  render() {
    const { Row, Cell } = Table;
    const {
      id,
      request,
      totalShares,
      isManager,
      loggedin,
      contractBalance
    } = this.props;
    const votesNeeded = totalShares / 2;
    const readyToFinalize = request.votingCount > votesNeeded;
    let status = request.votingCount * 100 / votesNeeded;
    console.log(contractBalance);

    if (request.complete) status = 100;

    //   let canAfford = false;
    //  if(request.value>=)

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
        error={contractBalance < web3.utils.fromWei(request.value, "ether")}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          <Progress percent={status} indicating disabled={request.complete} />
        </Cell>
        <Cell>
          {request.complete || readyToFinalize ? null : contractBalance <
          web3.utils.fromWei(request.value, "ether") ? (
            <Link route={`/campaigns/${this.props.address}/`}>
              <a>
                <Label color="red">
                  Contract balance: {this.props.contractBalance}
                </Label>
              </a>
            </Link>
          ) : (
            <Button
              loading={this.state.loading}
              color="green"
              basic
              onClick={this.onApprove}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ||
          !readyToFinalize ||
          !isManager ? null : contractBalance <
          web3.utils.fromWei(request.value, "ether") ? (
            <Link route={`/campaigns/${this.props.address}/`}>
              <a>
                <Label color="red">
                  Contract balance: {this.props.contractBalance}
                </Label>
              </a>
            </Link>
          ) : (
            <Button
              loading={this.state.loading}
              color="teal"
              basic
              onClick={this.onFinalize}
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
