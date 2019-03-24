const getLastBlockNum = require('./getLastBlockNum'); 
const getTokenContractList = require('./getTokenContractList'); 

const monNewBlocks = ({rpc}) =>
{

    (function loop(i) {
        new Promise((resolve, reject) => {

            getLastBlockNum({rpc})
                .then( lastBlockNum => 
                    {
                        console.log(lastBlockNum+": "),
                        getTokenContractList({rpc, formBlock: lastBlockNum, toBlock: lastBlockNum})
                        resolve()
                    }
                )

        }).then(loop.bind(null, i)).catch(err=>{console.error(": ",err)});
    })(1);
    
}

module.exports = monNewBlocks;