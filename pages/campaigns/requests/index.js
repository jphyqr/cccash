import React, { Component } from "react";
import {
  Button,
  Table,
  Progress,
  Sidebar,
  Segment,
  Menu,
  Icon,
  Divider,
  Tab
} from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";
import PublicCapRow from "../../../components/PublicCapRow";
import web3 from "../../../ethereum/web3";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const loggedin = accounts[0];

    const { address } = props.query;
    const campaign = Campaign(address);
    let contractBalance = await campaign.methods.getBalance().call();
    contractBalance = web3.utils.fromWei(contractBalance, "ether");
    const manager = await campaign.methods.manager().call();
    let isManager = false;
    if (loggedin == manager) {
      isManager = true;
    }
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
      totalShares,
      isManager,
      loggedin,
      contractBalance
    };
  }
  state = {
    visible: false,
    icon: "content"
  };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  renderPubCapRows() {
    return this.props.pubCapIncRequests.map((request, index) => {
      return (
        <PublicCapRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          totalShares={this.props.totalShares}
          isManager={this.props.isManager}
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
          isManager={this.props.isManager}
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
          isManager={this.props.isManager}
          loggedin={this.props.loggedin}
          contractBalance={this.props.contractBalance}
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
          isManager={this.props.isManager}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    const { visible } = this.state;

    const panes = [
      {
        menuItem: `Public Cap (${this.props.pubCapIncCount})`,
        render: () => (
          <Tab.Pane attached={false}>
            {this.props.pubCapIncCount == 0 ? null : (
              <div>
                <h4>Requests to Increase Public Cap</h4>

                {this.props.isManager ? (
                  <Link
                    route={`/campaigns/${
                      this.props.address
                    }/requests/publiccap`}
                  >
                    <a>
                      <Button
                        primary
                        floated="right"
                        style={{ marginBottom: 10 }}
                      >
                        +Public Cap
                      </Button>
                    </a>
                  </Link>
                ) : null}

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
              </div>
            )}
          </Tab.Pane>
        )
      },
      {
        menuItem: `Private Cap (${this.props.privCapIncCount})`,
        render: () => (
          <Tab.Pane attached={false}>
            {this.props.privCapIncCount == 0 ? null : (
              <div>
                <h4>Request to increase a private cap</h4>
                {this.props.isManager ? (
                  <Link
                    route={`/campaigns/${
                      this.props.address
                    }/requests/privatecap`}
                  >
                    <a>
                      <Button
                        primary
                        disabled="true"
                        floated="right"
                        style={{ marginBottom: 10 }}
                      >
                        +Private Cap
                      </Button>
                    </a>
                  </Link>
                ) : null}
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
              </div>
            )}
          </Tab.Pane>
        )
      },
      {
        menuItem: `Spending (${this.props.spendingRequestCount})`,
        render: () => (
          <Tab.Pane attached={false}>
            {" "}
            {this.props.spendingRequestCount == 0 ? null : (
              <div>
                <h4>Request to spend</h4>
                {this.props.isManager ? (
                  <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                      <Button
                        primary
                        floated="right"
                        style={{ marginBottom: 10 }}
                      >
                        +Spending Request
                      </Button>
                    </a>
                  </Link>
                ) : null}
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
              </div>
            )}
          </Tab.Pane>
        )
      },
      {
        menuItem: `Equity Tasks (${this.props.taskCount})`,
        render: () => (
          <Tab.Pane attached={false}>
            {this.props.taskCount == 0 ? null : (
              <div>
                <h4>Request for equity tasks</h4>
                {this.props.isManager ? (
                  <Link
                    route={`/campaigns/${this.props.address}/requests/task`}
                  >
                    <a>
                      <Button
                        primary
                        disabled="true"
                        floated="right"
                        style={{ marginBottom: 10 }}
                      >
                        +Task
                      </Button>
                    </a>
                  </Link>
                ) : null}
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
              </div>
            )}
          </Tab.Pane>
        )
      }
    ];
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
        <Divider />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="scale down"
            direction="top"
            visible={visible}
            inverted
          >
            <Menu.Item name="close">
              <Icon name="chevron up" onClick={this.toggleVisibility} />
            </Menu.Item>

            <Link route="/">
              <Menu.Item name="home">
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link route={`/campaigns/${this.props.address}/requests`}>
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
              <div style={{ minHeight: "100px" }}>
                <Link route={`/campaigns/${this.props.address}/`}>
                  <a>Back</a>
                </Link>
                <Divider />

                <Tab menu={{ attached: false }} panes={panes} />
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Layout>
    );
  }
}

export default RequestIndex;
