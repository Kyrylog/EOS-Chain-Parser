const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');                        
const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });

const getTokenContractList = require('./chain/getTokenContractList'); 
const monNewBlocks = require('./chain/monNewBlocks');                      

const parseChain = require('./parser/parseChain'); 

//var tokenContractList = getTokenContractList({rpc, formBlock: 44369800, toBlock: 44369900});

//var tokenContractList = getTokenContractList({rpc, formBlock: 28635700, toBlock: 28635800});
parseChain({rpc, formBlock: 28635700, toBlock: 28635800})
.then((res)=>{ console.log("Tocken acount info list", res)})
.catch(()=>{});

//monNewBlocks({rpc});