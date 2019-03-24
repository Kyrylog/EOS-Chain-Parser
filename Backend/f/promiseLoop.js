
const promiseLoop = ({asynFunction, args, thenFunction, start, end}) =>
{
    
    return new Promise((globalResolve, globalReject) => 
    {


        (function loop(currentBlockNumber) {
            if (currentBlockNumber <= lastBlock) new Promise((resolve, reject) => {

                asynFunction(args)
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