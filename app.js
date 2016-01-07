/**
 * Created by robbynewman on 1/6/16.
 */

var random_usd = require('./modules/convertRandom');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('static'));

app.get('/', function(request, response) {


    response.sendFile(path.join(__dirname, 'index.html'));

    //console.log(__dirname);

    var ourPath = path.join(__dirname,'index.html');
    console.log('ourPath: ', ourPath);

})


app.get('/balance', function(request,response){

    response.send(random_usd.finalUsd());

});


var server = app.listen(3000,function() {
    var host = server.address().adress;
    var port = server.address().port;

    console.log('Listening at', port);

});


