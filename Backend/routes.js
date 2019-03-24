
module.exports = function(app, db) {
    app.get('/get_token_list',function(req,res) {
        res.sendFile(__dirname + '/blocks/list.json');
    });

   
};