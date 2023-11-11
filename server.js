const express = require("express");
var favicon = require('serve-favicon');
var path = require('path');

const app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')))
 
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3500, function () {
    console.log("Server Initiated !!");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});

app.use(express.static('public'));
app.use('/images', express.static('images')); 