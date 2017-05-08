'use strict';

var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();
var routes = require('./routes');
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
module.exports = app; // this line is only used to make testing easier.

// remember to plug in your router and any other middleware you may need here.
app.use(morgan('combined', {stream: accessLogStream}));
app.use('/', routes);

if (!module.parent) app.listen(3000); // conditional prevents a very esotetiric EADDRINUSE issue with mocha watch + supertest + npm test.
