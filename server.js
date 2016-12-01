var express = require("express");

var PORT = 8080;

var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function(argument) {
    console.log('Server listening on port ' + PORT);
})