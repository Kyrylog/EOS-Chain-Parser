const getToken = require("./getToken");

const getAccountInfo = ({rpc, account}) =>
{
    return new Promise((resolve, reject) => 
    {
        getToken({account})
            .then((accountInfo) => {  })
            .catch( (err)=>{ console.error(err);reject("failed to get account info"); } );
        resolve(account);
    })
}
module.exports = getAccountInfo;