const getContractFromBlock = require("./getContractFromBlock");
//const contractIsToken = require("./contractIsToken");

const getTokenContractList = ({rpc, formBlock, toBlock}) =>
{
    
    return new Promise((globalResolve, globalReject) => 
    {
        var from = formBlock;
        var to = toBlock;
        var lastBlock = toBlock;
        var spec = 44369864;


        var tokenContractList = [];
    /*
        (function loop(currentBlockNumber) {
            if (currentBlockNumber < lastBlock)
            { 
                new Promise( (resolve, reject) => 
                {
                    getContractFromBlock({rpc, blockNumber: currentBlockNumber})
                    .then( contractList => 
                        {
                            console.log("-"+currentBlockNumber, contractList)
                            //for(var key in contractList)
                                //console.log(contractList);

                            //if(contractIsToken(contractName) == true)
                                blockList.push(contractList);
                            //resolve(contractList) 
                        }
                    )
                    .catch( (err) => 
                        {
                        console.error(currentBlockNumber +": "+err);
                        resolve();
                        } 
                    );
                })
                .then(loop.bind(null, currentBlockNumber+1));
            }
            //else
            //    globalResolve();
        })(from);
    */

        (function loop(currentBlockNumber) {
            if (currentBlockNumber <= lastBlock) new Promise((resolve, reject) => {

                getContractFromBlock({rpc, blockNumber: currentBlockNumber})
                    .then( contractList => 
                        {
                            console.log(currentBlockNumber+": ",contractList),
                            tokenContractList = [...tokenContractList, ...contractList];
                            resolve()
                        }
                    )

            }).then(loop.bind(null, currentBlockNumber+1)).catch(err=>{console.error(currentBlockNumber+": ",err)});
            else
                globalResolve(tokenContractList);
        })(from);



    })


}

module.exports = getTokenContractList;