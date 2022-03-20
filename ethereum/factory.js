import web3 from "./web3";
import Kaizen from "./build/Kaizen.json";

const instance=new web3.eth.Contract(
  JSON.parse(Kaizen.interface),
  '0xFA598887A766346779a89113f4Ad8dFcF28FbF6D'
);

export default instance;
