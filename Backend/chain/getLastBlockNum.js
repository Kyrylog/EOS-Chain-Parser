
const getContractName = require("./getContractName");
const writefile = require("../io/writefile");

const getContractFromBlock = ({rpc}) =>
{
    return new Promise((resolve, reject) => 
    {
        let contractList = [];
   
        rpc.get_info()
        .then((res)=>{
            
            resolve(res.head_block_num);
        })
        .catch((err)=>{reject("failed to get chain info")});
    })
    
}

module.exports = getContractFromBlock;