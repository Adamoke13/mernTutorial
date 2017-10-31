var express = require('express');
var app = express();
var port = 4200;

app.get('/', function (req, res) {
    res.send('Hello Express!');
});

app.listen(port, function(){
    console.log('App up and running on port: ' + port);
});