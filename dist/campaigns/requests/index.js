import React, { Component } from "react";
import { Button, Table, Progress } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";
import PublicCapRow from "../../../components/PublicCapRow";

class RequestIndex extends Component {
  state = { percent: 33 };

  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const pubCapIncCount = await campaign.methods
      .getPublicCapIncreaseCount()
      .call();
    const privCapIncCount = await campaign.methods
      .getPrivateCapIncreaseCount()
      .call();
    const spendingRequestCount = await campaign.methods
      .getRequestsCount()
      .call();
    const taskCount = await campaign.methods.getTasksCount().call();
    const totalShares = await campaign.methods.totalShares().call();

    const privCapIncRequests = await Promise.all(
      Array(parseInt(privCapIncCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.privateCapIncreaseRequests(index).call();
        })
    );

    const pubCapIncRequests = await Promise.all(
      Array(parseInt(pubCapIncCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.publicCapIncreaseRequests(index).call();
        })
    );

    const spendingRequests = await Promise.all(
      Array(parseInt(spendingRequestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    const tasks = await Promise.all(
      Array(parseInt(taskCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.tasks(index).call();
        })
    );

    return {
      address,
      pubCapIncRequests,
      pubCapIncCount,
      privCapIncCount,
      privCapIncRequests,
      taskCount,
      tasks,
      spendingRequests,
      spendingRequestCount,
      totalShares
    };
  }

  renderPubCapRows() {
    return this.props.pubCapIncRequests.map((request, index) => {
      return (
        <PublicCapRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          totalShares={this.props.totalShares}
        />
      );
    });
  }

  renderTasksRows() {
    return this.props.tasks.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          totalShares={this.props.totalShares}
        />
      );
    });
  }

  renderSpendingRequestRows() {
    return this.props.spendingRequests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          totalShares={this.props.totalShares}
        />
      );
    });
  }

  renderPrivCapRows() {
    return this.props.privCapIncRequests.map((request, index) => {
      return (
        <PublicCapRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          totalShares={this.props.totalShares}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              +Spending Request
            </Button>
          </a>
        </Link>
        <Link route={`/campaigns/${this.props.address}/requests/task`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              +Task
            </Button>
          </a>
        </Link>
        <Link route={`/campaigns/${this.props.address}/requests/publiccap`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              +Public Cap
            </Button>
          </a>
        </Link>
        <Link route={`/campaigns/${this.props.address}/requests/privatecap`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              +Private Cap
            </Button>
          </a>
        </Link>

        <h3>Public Cap Increase Requests</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Voting Progress</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderPubCapRows()}</Body>
        </Table>
        <div>Found {this.props.pubCapIncCount} requests.</div>
        <h3>Private Cap Increase Requests</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Total Shares</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderPrivCapRows()}</Body>
        </Table>
        <div>Found {this.props.privCapIncCount} requests.</div>

        <h3>Spending Requests</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Total Shares</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderSpendingRequestRows()}</Body>
        </Table>
        <div>Found {this.props.spendingRequestCount} requests.</div>

        <h3>Equity Tasks</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Total Shares</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderTasksRows()}</Body>
        </Table>
        <div>Found {this.props.tasksCount} requests.</div>
      </Layout>
    );
  }
}

export default RequestIndex;
