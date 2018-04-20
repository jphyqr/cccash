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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/johnhashem/workspace/cccash/pages/campaigns/new.js?entry";


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			managerRate: "", //user input always assume working with a string
			startUpNeeded: "",
			errorMessage: "",
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault(); //dont want to send for mautomatically to the back end server
								//want to create new campaign!!
								//get web3

								//start spinner
								_this.setState({ loading: true, errorMessage: "" });
								_context.prev = 2;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return _factory2.default.methods.createCampaign(_this.state.managerRate, _this.state.startUpNeeded).send({
									//since running inside browser, MM Can auto calculate gas we need for tx, so dont need to specify gas amt
									//need acount from web3 tho so import web3
									from: accounts[0]
								});

							case 8:

								_routes.Router.pushRoute("/");
								_context.next = 14;
								break;

							case 11:
								_context.prev = 11;
								_context.t0 = _context["catch"](2);

								_this.setState({ errorMessage: _context.t0.message });

							case 14:

								_this.setState({ loading: false });

							case 15:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 11]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: "render",

		//<Form onSubmit={this.onSubmit}> no () because we dont want to execute it now, but in the future
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement("h3", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, " Create a Campaign "), _react2.default.createElement(_semanticUiReact.Form, {
				onSubmit: this.onSubmit,
				error: !!this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, " Manager Rate "), _react2.default.createElement(_semanticUiReact.Input, {
				label: "Percentage",
				labelPosition: "right",
				value: this.state.managerRate,
				onChange: function onChange(event) {
					return _this3.setState({
						managerRate: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, "Start Up Needed"), _react2.default.createElement(_semanticUiReact.Input, {
				label: "Ether",
				labelPosition: "right",
				value: this.state.startUpNeeded,
				onChange: function onChange(event) {
					return _this3.setState({
						startUpNeeded: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			})), _react2.default.createElement(_semanticUiReact.Message, {
				error: true,
				header: "Oops!",
				content: this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, "Create!")));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWFuYWdlclJhdGUiLCJzdGFydFVwTmVlZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDTDtnQkFBUSxBQUNNLElBQUksQUFDakI7a0JBRk8sQUFFUSxBQUNmO2lCQUhPLEFBR08sQUFDZDtZQUpPLEEsQUFJRTtBQUpGLEFBQ1AsVyxBQU1EO3dGQUFXLGlCQUFBLEFBQU0sT0FBTjtRQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQURVLEFBQ1YsQUFBTSxrQkFBa0IsQUFDeEI7QUFDQTtBQUVBOztBQUNBO2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FOckIsQUFNVixBQUFjLEFBQStCO3dCQU5uQzt3QkFBQTtlQVFjLGNBQUEsQUFBSyxJQVJuQixBQVFjLEFBQVM7O1lBQTFCO0FBUkcsNEJBQUE7d0JBQUE7aUNBU0gsQUFBUSxRQUFSLEFBQ0osZUFDQSxNQUFBLEFBQUssTUFGRCxBQUVPLGFBQ1gsTUFBQSxBQUFLLE1BSEQsQUFHTyxlQUhQLEFBS0o7QUFFQTtBQUNBO2VBQU0sU0FqQkMsQUFTSCxBQUtDLEFBR0MsQUFBUztBQUhWLEFBQ0wsU0FOSTs7WUFXTjs7dUJBQUEsQUFBTyxVQXBCRSxBQW9CVCxBQUFpQjt3QkFwQlI7QUFBQTs7WUFBQTt3QkFBQTt3Q0FzQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQXRCckIsQUFzQlQsQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0F6Qk4sQUF5QlYsQUFBYyxBQUFXOztZQXpCZjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7OztPQTRCWDs7OzJCQUNTO2dCQUNSOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBRUEsd0NBQUEsQUFBQztjQUNVLEtBRFgsQUFDZ0IsQUFDZjtXQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFGZixBQUVxQjs7ZUFGckI7aUJBQUEsQUFJQztBQUpEO0FBQ0Msc0JBR0MsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLG1DQUFBLEFBQUM7V0FBRCxBQUNPLEFBQ047bUJBRkQsQUFFZSxBQUNkO1dBQU8sS0FBQSxBQUFLLE1BSGIsQUFHbUIsQUFDbEI7Y0FBVSx5QkFBQTttQkFDVCxBQUFLO21CQUNTLE1BQUEsQUFBTSxPQUZYLEFBQ1QsQUFBYyxBQUNhO0FBRGIsQUFDYixNQUREO0FBTEY7O2VBQUE7aUJBTkYsQUFJQyxBQUVDLEFBV0Q7QUFYQztBQUNDLHdCQVVELGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxvQ0FBQSxBQUFDO1dBQUQsQUFDTyxBQUNOO21CQUZELEFBRWUsQUFDZDtXQUFPLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ2xCO2NBQVUseUJBQUE7bUJBQ1QsQUFBSztxQkFDVyxNQUFBLEFBQU0sT0FGYixBQUNULEFBQWMsQUFDZTtBQURmLEFBQ2IsTUFERDtBQUxGOztlQUFBO2lCQW5CRixBQWlCQyxBQUVDLEFBV0Q7QUFYQztBQUNDLHdCQVVGLEFBQUM7V0FBRCxBQUVDO1lBRkQsQUFFUSxBQUNQO2FBQVMsS0FBQSxBQUFLLE1BSGYsQUFHcUI7O2VBSHJCO2lCQTlCRCxBQThCQyxBQUtBO0FBTEE7QUFDQyx1QkFJRCxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7ZUFBQTtpQkFBQTtBQUFBO01BdkNILEFBQ0MsQUFHQyxBQW1DQyxBQU1IOzs7OztBQW5Gd0IsQSxBQXNGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2huaGFzaGVtL3dvcmtzcGFjZS9jY2Nhc2gifQ==