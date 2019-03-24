
const getContractName = require("./getContractName");
const writefile = require("../io/writefile");

const getContractFromBlock = ({rpc, blockNumber}) =>
{
    return new Promise((resolve, reject) => 
    {
        let contractList = [];
   
        rpc.get_block(blockNumber)
        .then((res)=>{

            for(let transaction in res.transactions)
            {
                var contractName = getContractName({rpc, transaction: res.transactions[transaction]});
                if(contractName!=null)
                    contractList.push(contractName)
                    //if(blockNumber == 16851541)
                        //writefile.blockToJSON(blockNumber, res);
            }
            resolve(contractList);
        })
        .catch((err)=>{reject("failed to fetch")});
    })
    
}

/*
const getContractFromBlock = ({rpc, blockNumber}) =>
{
    return new Promise((globalResolve, globalReject) => 
    {
        let contractList = [];
   
        rpc.get_block(blockNumber)
        .then((res)=>{
            (function loop(transaction) {
                if (transaction <= res.transactions) new Promise((resolve, reject) => {
    
                    getContractName({rpc, transaction: res.transactions[transaction]})
                        .then( contractName => 
                            {
                                contractList.push(contractName)
                                resolve()
                            }
                        )
    
                }).then(loop.bind(null, transaction+1)).catch(err=>{globalReject("failed to get contract name")});
                else
                    globalResolve(contractList);
            })(from);

        })
        .catch((err)=>{globalReject("failed to fetch")});
    })
    
}*/

module.exports = getContractFromBlock;