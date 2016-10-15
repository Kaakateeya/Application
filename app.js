var express = require('express');
var app = express.createServer();
var path = require('path');
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/" }) ;
});
app.listen(process.env.PORT||3000);

