
const getHeadBlockNumber =  ({rpc}) =>
{
    return new Promise((resolve, reject) => 
    {
        rpc.get_info()
            .then((res)=>
            {
                resolve(res.head_block_num);
            })
            .catch((err)=>{reject("failed to get chain info")});
    })
}

module.exports = getHeadBlockNumber;