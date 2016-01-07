var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');

var port = process.env.PORT || 8082;

mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({ type:'application/vnd.api+json'}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

var router = express.Router();

require('./apps/routes')(app);




app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app; 	 	