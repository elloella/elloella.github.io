var express = require('express');
var app = express();

var path = require('path')
process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'public')));

console.log(process.env.PWD = process.cwd());

//Create a server on localhost:3000
var server = app.listen(process.env.PORT || 3000);
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
