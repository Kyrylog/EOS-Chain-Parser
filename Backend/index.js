const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');                        
const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });
       

const parseChain = require('./parser/parseChain'); 
const startMon = require('./mon/startMon'); 
const getToken = require('./parser/getToken'); 



parseChain({rpc, formBlock: 16851500, toBlock: 16851641})  /// get list.json from blocks range
.then((res)=>{ console.log("Tocken acount info list", res)})
.catch(()=>{});

//startMon({rpc});  /// start realtime list.json making from new blocks




/////server
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 8888;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var expressWs = require('express-ws')(app);

require('./routes')(app, {});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});