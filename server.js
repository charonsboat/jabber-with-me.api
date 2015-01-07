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
app.set('view engine', 'jade');

// ROUTES
// ===================================================================

// Main Router
var router = express.Router();

router.get('/', function (req, res)
{
	res.render('index', { title: 'Test Title', header: 'Hello, World!' });
});

app.use('/', router);

// API Router
var api_router = express.Router();

api_router.get('/', function (req, res)
{
	res.send('I\'m the API home page!');
});

api_router.get('/tests', function (req, res)
{
	res.send('I\'m the API tests page!');
});

api_router.get('/tests/:id', function (req, res)
{
	res.send('Testing: ' + req.params.id);
});

app.use('/api', api_router);

// START SERVER
// ===================================================================

app.listen(port);
console.log('App listening on port ' + port + '...');