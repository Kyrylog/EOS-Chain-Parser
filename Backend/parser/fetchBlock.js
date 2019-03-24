const fetchBlock = ({rpc, blockNumber}) =>
{
    return new Promise((resolve, reject) => 
    {
        rpc.get_block(blockNumber)
            .then((block) => { resolve(block); })
            .catch((err) => { reject("failed to fetch") });
    })
    
}
module.exports = fetchBlock;