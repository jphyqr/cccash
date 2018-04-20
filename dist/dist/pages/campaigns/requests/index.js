"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _PublicCapRow = require("../../../components/PublicCapRow");

var _PublicCapRow2 = _interopRequireDefault(_PublicCapRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/johnhashem/workspace/cccash/pages/campaigns/requests/index.js?entry";


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = { percent: 33 }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "renderPubCapRows",
    value: function renderPubCapRows() {
      var _this2 = this;

      return this.props.pubCapIncRequests.map(function (request, index) {
        return _react2.default.createElement(_PublicCapRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          totalShares: _this2.props.totalShares,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        });
      });
    }
  }, {
    key: "renderTasksRows",
    value: function renderTasksRows() {
      var _this3 = this;

      return this.props.tasks.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this3.props.address,
          totalShares: _this3.props.totalShares,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        });
      });
    }
  }, {
    key: "renderSpendingRequestRows",
    value: function renderSpendingRequestRows() {
      var _this4 = this;

      return this.props.spendingRequests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this4.props.address,
          totalShares: _this4.props.totalShares,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        });
      });
    }
  }, {
    key: "renderPrivCapRows",
    value: function renderPrivCapRows() {
      var _this5 = this;

      return this.props.privCapIncRequests.map(function (request, index) {
        return _react2.default.createElement(_PublicCapRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this5.props.address,
          totalShares: _this5.props.totalShares,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "+Spending Request"))), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/task", __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "+Task"))), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/publiccap", __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "+Public Cap"))), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/privatecap", __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "+Private Cap"))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Public Cap Increase Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, "Voting Progress"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, this.renderPubCapRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Found ", this.props.pubCapIncCount, " requests."), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "Private Cap Increase Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Total Shares"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, this.renderPrivCapRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Found ", this.props.privCapIncCount, " requests."), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Spending Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Total Shares"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, this.renderSpendingRequestRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "Found ", this.props.spendingRequestCount, " requests."), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, "Equity Tasks"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Total Shares"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, this.renderTasksRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Found ", this.props.tasksCount, " requests."));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, pubCapIncCount, privCapIncCount, spendingRequestCount, taskCount, totalShares, privCapIncRequests, pubCapIncRequests, spendingRequests, tasks;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getPublicCapIncreaseCount().call();

              case 4:
                pubCapIncCount = _context.sent;
                _context.next = 7;
                return campaign.methods.getPrivateCapIncreaseCount().call();

              case 7:
                privCapIncCount = _context.sent;
                _context.next = 10;
                return campaign.methods.getRequestsCount().call();

              case 10:
                spendingRequestCount = _context.sent;
                _context.next = 13;
                return campaign.methods.getTasksCount().call();

              case 13:
                taskCount = _context.sent;
                _context.next = 16;
                return campaign.methods.totalShares().call();

              case 16:
                totalShares = _context.sent;
                _context.next = 19;
                return _promise2.default.all(Array(parseInt(privCapIncCount)).fill().map(function (element, index) {
                  return campaign.methods.privateCapIncreaseRequests(index).call();
                }));

              case 19:
                privCapIncRequests = _context.sent;
                _context.next = 22;
                return _promise2.default.all(Array(parseInt(pubCapIncCount)).fill().map(function (element, index) {
                  return campaign.methods.publicCapIncreaseRequests(index).call();
                }));

              case 22:
                pubCapIncRequests = _context.sent;
                _context.next = 25;
                return _promise2.default.all(Array(parseInt(spendingRequestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 25:
                spendingRequests = _context.sent;
                _context.next = 28;
                return _promise2.default.all(Array(parseInt(taskCount)).fill().map(function (element, index) {
                  return campaign.methods.tasks(index).call();
                }));

              case 28:
                tasks = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  pubCapIncRequests: pubCapIncRequests,
                  pubCapIncCount: pubCapIncCount,
                  privCapIncCount: privCapIncCount,
                  privCapIncRequests: privCapIncRequests,
                  taskCount: taskCount,
                  tasks: tasks,
                  spendingRequests: spendingRequests,
                  spendingRequestCount: spendingRequestCount,
                  totalShares: totalShares
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiUHJvZ3Jlc3MiLCJMaW5rIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUHVibGljQ2FwUm93IiwiUmVxdWVzdEluZGV4Iiwic3RhdGUiLCJwZXJjZW50IiwicHJvcHMiLCJwdWJDYXBJbmNSZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJ0b3RhbFNoYXJlcyIsInRhc2tzIiwic3BlbmRpbmdSZXF1ZXN0cyIsInByaXZDYXBJbmNSZXF1ZXN0cyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUHViQ2FwUm93cyIsInB1YkNhcEluY0NvdW50IiwicmVuZGVyUHJpdkNhcFJvd3MiLCJwcml2Q2FwSW5jQ291bnQiLCJyZW5kZXJTcGVuZGluZ1JlcXVlc3RSb3dzIiwic3BlbmRpbmdSZXF1ZXN0Q291bnQiLCJyZW5kZXJUYXNrc1Jvd3MiLCJ0YXNrc0NvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRQdWJsaWNDYXBJbmNyZWFzZUNvdW50IiwiY2FsbCIsImdldFByaXZhdGVDYXBJbmNyZWFzZUNvdW50IiwiZ2V0UmVxdWVzdHNDb3VudCIsImdldFRhc2tzQ291bnQiLCJ0YXNrQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJwcml2YXRlQ2FwSW5jcmVhc2VSZXF1ZXN0cyIsInB1YmxpY0NhcEluY3JlYXNlUmVxdWVzdHMiLCJyZXF1ZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU87O0FBQ3hCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBa0I7Ozs7Ozs7OztJLEFBRW5COzs7Ozs7Ozs7Ozs7Ozt3TixBQUNKLFFBQVEsRUFBRSxTQUFGLEFBQVcsQTs7Ozs7dUNBK0RBO21CQUNqQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDMUQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sQUFDTDtjQUZGLEFBRU0sQUFDSjttQkFIRixBQUdXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCO3VCQUFhLE9BQUEsQUFBSyxNQUxwQixBQUswQjs7c0JBTDFCO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQUZKLEFBQU8sQUFXUixPQVhROzs7O3NDQWFTO21CQUNoQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM5QzsrQkFDRSxBQUFDO2VBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTSxBQUNKO21CQUhGLEFBR1csQUFDVDttQkFBUyxPQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDcEI7dUJBQWEsT0FBQSxBQUFLLE1BTHBCLEFBSzBCOztzQkFMMUI7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBRkosQUFBTyxBQVdSLE9BWFE7Ozs7Z0RBYW1CO21CQUMxQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDekQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sQUFDTDtjQUZGLEFBRU0sQUFDSjttQkFIRixBQUdXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCO3VCQUFhLE9BQUEsQUFBSyxNQUxwQixBQUswQjs7c0JBTDFCO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQUZKLEFBQU8sQUFXUixPQVhROzs7O3dDQWFXO21CQUNsQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsbUJBQVgsQUFBOEIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0Q7K0JBQ0UsQUFBQztlQUFELEFBQ08sQUFDTDtjQUZGLEFBRU0sQUFDSjttQkFIRixBQUdXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCO3VCQUFhLE9BQUEsQUFBSyxNQUxwQixBQUswQjs7c0JBTDFCO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQUZKLEFBQU8sQUFXUixPQVhROzs7OzZCQWFBO1VBQUEsQUFDQyxTQURELEFBQ21DLHVCQURuQyxBQUNDO1VBREQsQUFDUyxNQURULEFBQ21DLHVCQURuQyxBQUNTO1VBRFQsQUFDYyxhQURkLEFBQ21DLHVCQURuQyxBQUNjO1VBRGQsQUFDMEIsT0FEMUIsQUFDbUMsdUJBRG5DLEFBQzBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFFLGNBQXpDLEFBQXVDLEFBQWdCO29CQUF2RDtzQkFBQTtBQUFBO1NBSE4sQUFDRSxBQUNFLEFBQ0UsQUFLSix3Q0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBRSxjQUF6QyxBQUF1QyxBQUFnQjtvQkFBdkQ7c0JBQUE7QUFBQTtTQVZOLEFBUUUsQUFDRSxBQUNFLEFBS0osNEJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUUsY0FBekMsQUFBdUMsQUFBZ0I7b0JBQXZEO3NCQUFBO0FBQUE7U0FqQk4sQUFlRSxBQUNFLEFBQ0UsQUFLSixrQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBRSxjQUF6QyxBQUF1QyxBQUFnQjtvQkFBdkQ7c0JBQUE7QUFBQTtTQXhCTixBQXNCRSxBQUNFLEFBQ0UsQUFNSixtQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0E5QkYsQUE4QkUsQUFDQSxpREFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0Esb0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVJOLEFBQ0UsQUFDRSxBQU1FLEFBR0osK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0ExQ0osQUErQkUsQUFXRSxBQUFPLEFBQUssQUFFZCxzQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsZ0JBNUN6QixBQTRDRSxBQUNBLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTdDRixBQTZDRSxBQUNBLGtEQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUk4sQUFDRSxBQUNFLEFBTUUsQUFHSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQXpESixBQThDRSxBQVdFLEFBQU8sQUFBSyxBQUVkLHVDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixpQkEzRHpCLEFBMkRFLEFBRUEsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBN0RGLEFBNkRFLEFBQ0Esc0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVE4sQUFDRSxBQUNFLEFBT0UsQUFHSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQTFFSixBQThERSxBQVlFLEFBQU8sQUFBSyxBQUVkLCtDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixzQkE1RXpCLEFBNEVFLEFBRUEsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBOUVGLEFBOEVFLEFBQ0EsaUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVE4sQUFDRSxBQUNFLEFBT0UsQUFHSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQTNGSixBQStFRSxBQVlFLEFBQU8sQUFBSyxBQUVkLHFDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixZQTlGM0IsQUFDRSxBQTZGRSxBQUdMOzs7Ozs0R0F6TjRCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNQUFsQixBQUNGLEE7QSwyQkFBVyx3QkFBQSxBQUFTLEE7O3VCQUNHLFNBQUEsQUFBUyxRQUFULEFBQzFCLDRCQUQwQixBQUUxQixBOzttQkFGRztBOzt1QkFHd0IsU0FBQSxBQUFTLFFBQVQsQUFDM0IsNkIsQUFEMkIsQUFFM0I7O21CQUZHO0E7O3VCQUc2QixTQUFBLEFBQVMsUUFBVCxBQUNoQyxtQkFEZ0MsQUFFaEMsQTs7bUJBRkc7QTs7dUJBR2tCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFqQixBLEFBQWlDOzttQkFBbkQ7QTs7dUJBQ29CLFNBQUEsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEEsQUFBK0I7O21CQUFuRDtBOzt5Q0FFMkIsQUFBUSxVQUNqQyxTQUFOLEFBQU0sQUFBUyxrQkFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQiwyQkFBakIsQUFBNEMsT0FBbkQsQUFBTyxBQUFtRCxBQUMzRDtBQUw0QixBQUMvQixBLGlCQUFBLENBRCtCOzttQkFBM0I7QTs7eUNBUTBCLEFBQVEsVUFDaEMsU0FBTixBQUFNLEFBQVMsaUJBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsMEJBQWpCLEFBQTJDLE9BQWxELEFBQU8sQUFBa0QsQUFDMUQ7QUFMMkIsQUFDOUIsQSxpQkFBQSxDQUQ4Qjs7bUJBQTFCO0E7O3lDQVF5QixBQUFRLFVBQy9CLFNBQU4sQUFBTSxBQUFTLHVCQUFmLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDekM7QUFMMEIsQUFDN0IsQSxpQkFBQSxDQUQ2Qjs7bUJBQXpCO0E7O3lDQVFjLEFBQVEsVUFDcEIsU0FBTixBQUFNLEFBQVMsWUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixNQUFqQixBQUF1QixPQUE5QixBQUFPLEFBQThCLEFBQ3RDO0FBTGUsQUFDbEIsQSxpQkFBQSxDQURrQjs7bUJBQWQ7QTs7MkJBUUMsQUFFTDtxQ0FGSyxBQUdMO2tDQUhLLEFBSUw7bUNBSkssQUFLTDtzQ0FMSyxBQU1MOzZCQU5LLEFBT0w7eUJBUEssQUFRTDtvQ0FSSyxBQVNMO3dDQVRLLEFBVUw7K0JBVkssQTtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuRHFCLEEsQUErTjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2huaGFzaGVtL3dvcmtzcGFjZS9jY2Nhc2gifQ==