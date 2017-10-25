var path = require("path");
var http = require("http");
var express = require("express");
var morgan = require("morgan");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 5003;

var app = express();
var server = http.createServer(app);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blackjack', {
    useMongoClient: true
});

const api = require('./api');

app.use('/api', api);

app.use(express.static(path.join(__dirname, "../dist")));

app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(port);

console.log("Server started on port " + port);