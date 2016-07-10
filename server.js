/* global process */
/* global __dirname */
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = process.env.PORT || 8082;

app.use(bodyParser.json());

app.use(bodyParser.json({ type:'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

const router = express.Router();

require('./apps/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
