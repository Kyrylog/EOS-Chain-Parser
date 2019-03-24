const axios = require('axios');
const writefile = require('../io/writeFile');

const getToken = ({account}) =>
{
    return new Promise((resolve, reject) => 
    {
        var apikey = "a8ed0c7b71d2fbe63dfaa58f2c64125a";
        axios.get(`https://api.eospark.com/api?module=account&action=get_currency_balance_by_accounts&apikey=${apikey}&accounts=${account}&code=${account}`)
            .then(res => 
            {  
                if(res && res.data && res.data.data && res.data.data[0] && res.data.data[0].balance && res.data.data[0].balance[0])
                    if(res.data.data[0].balance[0].split(" ")[1] != "EOS")
                    {
                        writefile.json({ "name": account, "symbol": res.data.data[0].balance[0].split(" ")[1] });
                        resolve({ "name": account, "sybol": res.data.data[0].balance[0].split(" ")[1] }); 
                    }
                else
                    reject();
            })
            .catch( (err)=>{ console.error(err);reject("failed to get token info"); } );
    })
}
module.exports = getToken;