

const getContractFromBlock = ({block}) =>
{

    let accountList = [];

        for(let transaction in block.transactions)
        {
            var accountName = getAccountName({transaction: block.transactions[transaction]});
            if(accountName!=null)
                accountList.push(accountName);
                //if(blockNumber == 16851541)
                    //writefile.blockToJSON(blockNumber, res);
        }

    return accountList;
 
}

const getAccountName = ({rpc, transaction}) =>
{
    if(transaction.trx)
    {
        let trx = transaction.trx;
        if(trx.transaction)
        {
            var t = trx.transaction;
            if(t.actions)
                for(let a in t.actions)
                    if(t.actions[a].data)
                        if(t.actions[a].data.code)
                        {
                            if(t.actions[a]!=null && t.actions[a].data.account)
                            {   
                                return t.actions[a].data.account;
                            }
                        }
        }
    }
    return null;
}



module.exports = getContractFromBlock;