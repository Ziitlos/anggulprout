'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    app = module.exports.app = exports.app = express(),
    compression = require('compression');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

//removeIf(production)
app.use(require('connect-livereload')());
app.use('/scripts', express.static(__dirname + '/frontend/scripts'));
app.use('/styles', express.static(__dirname + '/frontend/styles'));
app.use('/app', express.static(__dirname + '/frontend/app'));
app.use('/node_modules/@angular', express.static('node_modules/@angular'));
app.use('/node_modules/rxjs', express.static('node_modules/rxjs'));
app.get('/main.js', function(req, res) {
    res.sendFile(__dirname + '/frontend/main.js');
});
app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/frontend/favicon.ico');
});
app.get('/manifest.json', function(req, res) {
    res.sendFile(__dirname + '/frontend/manifest.json');
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/frontend/index.html');
});
//endRemoveIf(production)

//removeIf(development)
app.use('/images', express.static('%%location%%images'));
app.use('/styles', express.static('%%location%%styles'));
app.use('/scripts', express.static('%%location%%scripts'));
app.use('/fonts', express.static('%%location%%fonts'));
app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/favicon.ico');
});
app.get('/manifest.json', function(req, res) {
    res.sendFile(__dirname + '/manifest.json');
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
//endRemoveIf(development)

let port = process.env.PORT || 8080;
app.listen(port);
console.log('API listening on port ' + port + ' ...');
