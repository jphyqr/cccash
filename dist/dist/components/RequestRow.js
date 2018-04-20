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

var _jsxFileName = "/Users/johnhashem/workspace/cccash/components/RequestRow.js";


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
              return campaign.methods.approveRequest(_this.props.id).send({
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
              return campaign.methods.finalizeRequest(_this.props.id).send({
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
          lineNumber: 33
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: status, indicating: true, disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, request.complete && readyToFinalize ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvZ3Jlc3MiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsInRvdGFsU2hhcmVzIiwidm90ZXNOZWVkZWQiLCJyZWFkeVRvRmluYWxpemUiLCJ2b3RpbmdDb3VudCIsInN0YXR1cyIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUTs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0oscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSx5QkFDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs4QkFEM0I7cUJBR2EsY0FBQSxBQUFLLElBSGxCLEFBR2EsQUFBUzs7aUJBQTFCO0FBSEksa0NBQUE7OEJBQUE7OEJBSUosQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQUxFLEFBSUosQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFKSTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGUsQUFTWixzRkFBYSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDTDtBQURLLHlCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9COytCQUQxQjtxQkFHWSxjQUFBLEFBQUssSUFIakIsQUFHWSxBQUFTOztpQkFBMUI7QUFISyxtQ0FBQTsrQkFBQTs4QkFJTCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FMRyxBQUlMLEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBSks7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBU0o7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDd0IsS0FGOUIsQUFFbUM7VUFGbkMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLHFCQUZkLEFBRWMsQUFDckI7O1VBQU0sY0FBYyxjQUFwQixBQUFrQyxBQUNsQztVQUFNLGtCQUFrQixRQUFBLEFBQVEsY0FBaEMsQUFBOEMsQUFDOUM7VUFBTSxTQUFTLFFBQUEsQUFBUSxjQUFSLEFBQXNCLE1BQXJDLEFBQTJDLEFBRTNDOzs2QkFDRyxjQUFEO2tCQUNZLFFBRFosQUFDb0IsQUFDbEI7a0JBQVUsbUJBQW1CLENBQUMsUUFGaEMsQUFFd0M7O29CQUZ4QztzQkFBQSxBQUlFO0FBSkY7QUFDRSxPQURGLGtCQUlHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBSkYsQUFJRSxBQUNBLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUxGLEFBS0UsQUFBZSxBQUNmLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FOcEMsQUFNRSxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQVBGLEFBT0UsQUFBZSxBQUNmLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsMkNBQVMsU0FBVixBQUFtQixRQUFRLFlBQTNCLE1BQXNDLFVBQVUsUUFBaEQsQUFBd0Q7b0JBQXhEO3NCQVRKLEFBUUUsQUFDRSxBQUVGO0FBRkU7MkJBRUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7T0FBQSxFQWJOLEFBV0UsQUFFSSxBQUtKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsWUFBUixBQUFvQixrQkFBcEIsQUFBc0MsdUJBQ3JDLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtPQUFBLEVBckJSLEFBQ0UsQUFrQkUsQUFFSSxBQU9UOzs7OztBQXREc0IsQSxBQXlEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9obmhhc2hlbS93b3Jrc3BhY2UvY2NjYXNoIn0=