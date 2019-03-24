
const fetchBlock = require("./fetchBlock");
const getAccountInfoList = require("./getAccountInfoList");
const getAccountList = require("./getAccountList");

const parseChain = ({rpc, formBlock, toBlock}) =>
{
    
    return new Promise((globalResolve, globalReject) => 
    {
        var firstBlock = formBlock;
        var to = toBlock;
        var lastBlock = toBlock;
        var accontInfoList = [];
      
        (function loop(currentBlockNumber) {
            if (currentBlockNumber <= lastBlock) new Promise((resolve, reject) => {

                fetchBlock({rpc, blockNumber: currentBlockNumber})
                    .then( block => 
                        {
                            let accountList = [...getAccountList({block})];
                        
                            console.log(currentBlockNumber+": ",accountList)

                            if(accountList && accountList.length > 0)
                                getAccountInfoList({rpc, accountList})
                                .then(accontInfo => { accontInfoList = [...accontInfoList, ...accontInfo]; resolve()})
                                .catch(err => { console.error(currentBlockNumber, "Failed to getAccontInfoList"); resolve()});
                            else
                                resolve()
                               

                        }
                    )
                    .catch((err)=>{console.error( currentBlockNumber, err )});

            }).then(loop.bind(null, currentBlockNumber+1)).catch(err=>{console.error(currentBlockNumber+": ",err)});
            else
                globalResolve(accontInfoList);
        })(firstBlock);



    })


}

module.exports = parseChain;