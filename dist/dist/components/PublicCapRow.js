"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/johnhashem/workspace/cccash/components/PublicCapRow.js";


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							_context.next = 6;
							return campaign.methods.approvePublicCapIncreaseRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;
							_context2.next = 6;
							return campaign.methods.finalizePublicCapIncreaseRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: "render",
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    totalShares = _props.totalShares;

			var votesNeeded = totalShares / 2;
			var readyToFinalize = request.votingCount > votesNeeded;
			var status = request.votingCount * 100 / votesNeeded;

			return _react2.default.createElement(Row, {
				disabled: request.complete,
				positive: readyToFinalize && !request.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement(_semanticUiReact.Progress, {
				percent: status,
				indicating: true,
				disabled: request.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			})), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, "Approve")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, "Finalize")));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHVibGljQ2FwUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJQcm9ncmVzcyIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVB1YmxpY0NhcEluY3JlYXNlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVQdWJsaWNDYXBJbmNyZWFzZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsInRvdGFsU2hhcmVzIiwidm90ZXNOZWVkZWQiLCJyZWFkeVRvRmluYWxpemUiLCJ2b3RpbmdDb3VudCIsInN0YXR1cyIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUTs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ0wscUZBQVksbUJBQUE7aUJBQUE7aUVBQUE7Y0FBQTtzQ0FBQTtXQUNMO0FBREssa0JBQ00sd0JBQVMsTUFBQSxBQUFLLE1BRHBCLEFBQ00sQUFBb0I7dUJBRDFCO2NBR1ksY0FBQSxBQUFLLElBSGpCLEFBR1ksQUFBUzs7V0FBMUI7QUFISywyQkFBQTt1QkFBQTt1QkFJTCxBQUFTLFFBQVQsQUFDSixnQ0FBZ0MsTUFBQSxBQUFLLE1BRGpDLEFBQ3VDLElBRHZDLEFBRUo7Y0FDTSxTQVBHLEFBSUwsQUFFQyxBQUNDLEFBQVM7QUFEVixBQUNMLFFBSEk7O1dBSks7V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0EsYSxBQVdaLHNGQUFhLG9CQUFBO2lCQUFBO21FQUFBO2NBQUE7d0NBQUE7V0FDTjtBQURNLGtCQUNLLHdCQUFTLE1BQUEsQUFBSyxNQURuQixBQUNLLEFBQW9CO3dCQUR6QjtjQUdXLGNBQUEsQUFBSyxJQUhoQixBQUdXLEFBQVM7O1dBQTFCO0FBSE0sNEJBQUE7d0JBQUE7dUJBSU4sQUFBUyxRQUFULEFBQ0osaUNBQWlDLE1BQUEsQUFBSyxNQURsQyxBQUN3QyxJQUR4QyxBQUVKO2NBQ00sU0FQSSxBQUlOLEFBRUMsQUFDQyxBQUFTO0FBRFYsQUFDTCxRQUhJOztXQUpNO1dBQUE7d0JBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7MkJBV0o7T0FBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO09BREEsQUFDSyxPQURMLEFBQ2MsdUJBRGQsQUFDSztnQkFDd0IsS0FGN0IsQUFFa0M7T0FGbEMsQUFFQSxZQUZBLEFBRUE7T0FGQSxBQUVJLGlCQUZKLEFBRUk7T0FGSixBQUVhLHFCQUZiLEFBRWEsQUFDckI7O09BQU0sY0FBYyxjQUFwQixBQUFrQyxBQUNsQztPQUFNLGtCQUFrQixRQUFBLEFBQVEsY0FBaEMsQUFBOEMsQUFDOUM7T0FBTSxTQUFTLFFBQUEsQUFBUSxjQUFSLEFBQXNCLE1BQXJDLEFBQTJDLEFBRTNDOzswQkFDRSxjQUFEO2NBQ1csUUFEWCxBQUNtQixBQUNsQjtjQUFVLG1CQUFtQixDQUFDLFFBRi9CLEFBRXVDOztlQUZ2QztpQkFBQSxBQUlDO0FBSkQ7QUFDQyxJQURELGtCQUlFLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsTUFKRCxBQUlDLEFBQ0EscUJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUxELEFBS0MsQUFBZSxBQUNmLDhCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsb0JBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQU5uQyxBQU1DLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDO2FBQUQsQUFDVSxBQUNUO2dCQUZELEFBR0M7Y0FBVSxRQUhYLEFBR21COztlQUhuQjtpQkFSRixBQU9DLEFBQ0MsQUFNRDtBQU5DO0FBQ0Msd0JBS0QsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxjQUNFLEFBQVEsV0FBUixBQUFtQix1QkFDbkIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO2VBQTFDO2lCQUFBO0FBQUE7SUFBQSxFQWhCSCxBQWNDLEFBRUUsQUFLRiw2QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQ0UsQUFBUSxXQUFSLEFBQW1CLHVCQUNuQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7ZUFBekM7aUJBQUE7QUFBQTtJQUFBLEVBeEJKLEFBQ0MsQUFxQkMsQUFFRSxBQU9KOzs7OztBQTdEdUIsQSxBQWdFekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHVibGljQ2FwUm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2huaGFzaGVtL3dvcmtzcGFjZS9jY2Nhc2gifQ==