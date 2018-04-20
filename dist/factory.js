import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x5573FbD93C97973EF860fFbBf18A4381d3f1C8d5"
);

export default instance;
