const fs = require('fs');

const blockToJSON = (id, block) =>
{
    fs.writeFile("./blocks/" + id + ".json", JSON.stringify(block), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

module.exports = { blockToJSON }