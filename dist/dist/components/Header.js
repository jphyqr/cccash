"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/johnhashem/workspace/cccash/components/Header.js";


var Header = function (_Component) {
	(0, _inherits3.default)(Header, _Component);

	function Header() {
		(0, _classCallCheck3.default)(this, Header);

		return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
	}

	(0, _createClass3.default)(Header, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}, _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			}, _react2.default.createElement("a", { className: "item", __source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, "CCCASH")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement("a", { className: "item", __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement("a", { className: "item", __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, "+"))));
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJIZWFkZXIiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7MkJBQ0ksQUFDUjswQkFDQyxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYTtlQUExQjtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBLE9BQUcsV0FBSCxBQUFhO2VBQWI7aUJBQUE7QUFBQTtNQUZGLEFBQ0MsQUFDQyxBQUdELDRCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUEsT0FBRyxXQUFILEFBQWE7ZUFBYjtpQkFBQTtBQUFBO01BRkYsQUFDQyxBQUNDLEFBR0QsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQSxPQUFHLFdBQUgsQUFBYTtlQUFiO2lCQUFBO0FBQUE7TUFaSixBQUNDLEFBS0MsQUFLQyxBQUNDLEFBS0o7Ozs7O0FBbkJtQixBLEFBc0JyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvaG5oYXNoZW0vd29ya3NwYWNlL2NjY2FzaCJ9