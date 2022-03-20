const HDWalletProvider=require('@truffle/hdwallet-provider');
const Web3=require('web3');
const compiledFactory = require('./build/Kaizen.json');

/*
const provider=new HDWalletProvider(
  'swift mixture reform step tube question once quiz job negative smoke sentence',
  'https://rinkeby.infura.io/v3/91fd89f63cb94781a4665384fbc7f9ef'
);
*/
const provider=new HDWalletProvider(
  'f7ebc378528838f6df3c98b63262a6addbb3223aea9118a847c7298855427d62',
  'http://localhost:7545'
);

const web3=new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account',accounts[0]);
  const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0],gas:'6000000'});

  console.log('Contract deployed to',result.options.address);
  provider.engine.stop();
};
deploy();
