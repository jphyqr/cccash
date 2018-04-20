import Web3 from "web3";

let web3; //want to reassign it later

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	//our code executed inside browser + MM available
	web3 = new Web3(window.web3.currentProvider); //hijack mm provider use it
} else {
	//we are on the server OR user is not running MM
	const provider = new Web3.providers.HttpProvider(
		"https://rinkeby.infura.io/HZTrSirvBRfaaAo7fQhe"
	);
	web3 = new Web3(provider);
}
export default web3;
