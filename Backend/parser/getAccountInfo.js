const getAccountInfo = ({rpc, account}) =>
{
    return new Promise((resolve, reject) => 
    {
        rpc.get_account(account)
            .then(accountInfo => { resolve(accountInfo); })
            .catch( (err)=>{ reject("failed to get account info"); } );
    })
}
module.exports = getAccountInfo;