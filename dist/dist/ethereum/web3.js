"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; //want to reassign it later

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	//our code executed inside browser + MM available
	web3 = new _web2.default(window.web3.currentProvider); //hijack mm provider use it
} else {
	//we are on the server OR user is not running MM
	var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/HZTrSirvBRfaaAo7fQhe");
	web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZLEFBQUosR0FBVTs7QUFFVixJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQ7QUFFM0Q7UUFBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUZpRCxBQUV4RSxBQUFPLEFBQXFCLGlCQUY0QyxBQUN4RSxDQUM4QyxBQUM5QztBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2hCLEFBRUQ7UUFBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNoQjtBQUNEO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9obmhhc2hlbS93b3Jrc3BhY2UvY2NjYXNoIn0=