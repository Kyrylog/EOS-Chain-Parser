const fs = require('fs');
const list = require('../blocks/list.json');

var mapJSON = {};
var listJSON = [];

console.log((list));
for(var i in list)
    mapJSON[list[i].name] = list[i].symbol;


const blockToJSON = (id, block) =>
{
    fs.writeFile("./blocks/" + id + ".json", JSON.stringify(block), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

const json = (data) =>
{
    console.log(data)
    listJSON = [];

    mapJSON[data.name] = data.symbol;

    for(var key in mapJSON)
        listJSON.push({name: key, symbol: mapJSON[key]});

    console.log(listJSON)
    fs.writeFile("./blocks/list.json", JSON.stringify(listJSON), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

module.exports = { blockToJSON, json }