// server.js

// BASE SETUP
// ===================================================================

var express = require('express');
var router 	= require('./router');
var path 	= require('path');
var app		= express();

// CONFIGURATION
// ===================================================================

var env		= require('node-env-file');
	env(path.join(__dirname, '/config/.env'));

var port	= process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'templates/master' });

// ROUTES
// ===================================================================

router(app, express);

// START SERVER
// ===================================================================

app.listen(port);
console.log('App listening on port ' + port + '...');