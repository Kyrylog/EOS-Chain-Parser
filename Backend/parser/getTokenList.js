const getAccountInfo = require("./getAccountInfo");

const TokenList = ({rpc, accountList}) =>
{
    return new Promise((resolve, reject) => 
    {
        var accountInfoList = [];
        var done = 0;

        for(var i in accountList)
        {
            getAccountInfo({rpc, account: accountList[i]})
                .then(accountInfo =>
                    {
                        accountInfoList = [...accountInfoList, accountInfo];
                        done ++;
                        if(done == accountList.length)
                            resolve(accountInfoList);
                    }
                )
                .catch((err)=>
                    {
                        console.log(accountList[i] + ": " + err);
                        done ++;
                        if(done == accountList.length)
                            resolve(accountInfoList);
                    }
                );
        }
        
    })
    
}
module.exports = TokenList;