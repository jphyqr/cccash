import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x3f92dF8030965B4838db4b342304e3ce13addDC9"
);

export default instance;
