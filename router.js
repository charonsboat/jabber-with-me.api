module.exports = function (app, express)
{
	// Main Router
	var router = express.Router();

	router.get('/', function (req, res)
	{
		res.render('home', { title: 'Test Title' });
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

	return true;
}