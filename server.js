// server.js

// BASE SETUP
// ===================================================================

var express = require('express');
var path 	= require('path');
var app		= express();

// CONFIGURATION
// ===================================================================

var env		= require('node-env-file');
	env(path.join(__dirname, '/config/.env'));

var port	= process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// ===================================================================

var router = express.Router();

router.get('/', function (req, res)
{
	res.send('I\'m the API home page!');
});

router.get('/tests', function (req, res)
{
	res.send('I\'m the API tests page!');
});

router.get('/tests/:id', function (req, res)
{
	res.send('Testing: ' + req.params.id);
});

app.use('/api', router);

// START SERVER
// ===================================================================

app.listen(port);
console.log('App listening on port ' + port + '...');