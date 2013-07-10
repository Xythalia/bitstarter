var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

function readFile(path){
  var data = fs.readFileSync(path)
  console.log("Script: " + __filename + "\nRead: " + path);
  return data;
  
}

var string = readFile("index.html").toString();
console.log("Read String: " + string);
app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});