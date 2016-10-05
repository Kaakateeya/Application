var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res){
    //res.sendfile('indexdefault.html', { root: __dirname + "/" }) ;
    res.sendfile('index.html', { root: __dirname + "/" }) ;
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});