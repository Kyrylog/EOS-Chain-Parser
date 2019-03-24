const getHeadBlockNumber = require('./getHeadBlockNumber'); 
const parseChain = require('../parser/parseChain'); 

const monNewBlocks = ({rpc}) =>
{
    var lastBlockNum = 0;
    (function loop(i) {
        new Promise((resolve, reject) => {

            getHeadBlockNumber({rpc})
                .then( headBlockNum => 
                    {
                        if(lastBlockNum != headBlockNum)
                        {
                            lastBlockNum = headBlockNum;

                            parseChain({rpc, formBlock: headBlockNum, toBlock: headBlockNum})
                                .then((accountInfoList) =>
                                {
                                    console.log(": ", accountInfoList);
                                    resolve();
                                })
                                .catch( (err)=> {console.error(err)} );
                        }
                        else
                            resolve();
                        
                    }
                )

        }).then(loop.bind(null, i)).catch(err=>{console.error(": ",err)});
    })(1);
    
}

module.exports = monNewBlocks;