var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var content = fs.readFileSync('index.html');
var content1 = fs.readFileSync('about.html');

app.get('/', function(request, response) {
  response.send(content.toString("utf-8"));
});


app.get('/about.html', function(request, response) {
  response.send(content1.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
