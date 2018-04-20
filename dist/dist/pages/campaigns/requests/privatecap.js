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

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/johnhashem/workspace/cccash/pages/campaigns/requests/privatecap.js?entry";


var PrivateCapIncrease = function (_Component) {
	(0, _inherits3.default)(PrivateCapIncrease, _Component);

	function PrivateCapIncrease() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PrivateCapIncrease);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateCapIncrease.__proto__ || (0, _getPrototypeOf2.default)(PrivateCapIncrease)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: "",
			description: "",
			recipient: "",
			loading: false,
			errorMessage: ""
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, recipient, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

								_this.setState({ loading: true, errorMessage: "" });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, "ether"), recipient).send({ from: accounts[0] });

							case 10:

								_routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context["catch"](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:

								_this.setState({ loading: false });

							case 17:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PrivateCapIncrease, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, "Back")), _react2.default.createElement("h3", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, "Private Cap Increase Request"), _react2.default.createElement(_semanticUiReact.Form, {
				onSubmit: this.onSubmit,
				error: !!this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({
						description: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, "Value in Ether"), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			})), _react2.default.createElement(_semanticUiReact.Message, {
				error: true,
				header: "Oops!",
				content: this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, "Create!")));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;

								console.log(address);
								return _context2.abrupt("return", { address: address });

							case 3:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PrivateCapIncrease;
}(_react.Component);

exports.default = PrivateCapIncrease;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9wcml2YXRlY2FwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJMYXlvdXQiLCJQcml2YXRlQ2FwSW5jcmVhc2UiLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUzs7QUFDaEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozs7a08sQUFDTDtVQUFRLEFBQ0EsQUFDUDtnQkFGTyxBQUVNLEFBQ2I7Y0FITyxBQUdJLEFBQ1g7WUFKTyxBQUlFLEFBQ1Q7aUJBTE8sQUFLTyxBO0FBTFAsQUFDUCxXQWFELEE7d0ZBQVcsaUJBQUEsQUFBTSxPQUFOOzhEQUFBOztrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksbUJBR08sd0JBQVMsTUFBQSxBQUFLLE1BSHJCLEFBR08sQUFBb0I7c0JBQ0ssTUFKaEMsQUFJ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