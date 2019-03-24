/*const getContractName = ({rpc, transaction}) =>
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
                            //onsole.log(t.actions[a].account)
                            if(t.actions[a]!=null && t.actions[a].data.account)
                            {   
                                rpc.get_account(t.actions[a].data.account).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
                                return t.actions[a].data.account;
                            }
                        }
        }
    }
    return null;;
}*/

const getContractName = ({rpc, transaction}) =>
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
                            //onsole.log(t.actions[a].account)
                            if(t.actions[a]!=null && t.actions[a].data.account)
                            {   
                                //rpc.get_account(t.actions[a].data.account).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
                                return t.actions[a].data.account;
                            }
                        }
        }
    }
    return null;;

}
      

module.exports = getContractName;