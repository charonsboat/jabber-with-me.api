var router = {

	routes: {
		main: function (app, express)
		{
			// Main Router
			var router = express.Router();

			router.get('/', function (req, res)
			{
				res.render('home');
			});

			app.use('/', router);
		}, 

		api: function (app, express)
		{
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
		}
	}, 

	Route: function (app, express)
	{
		router.routes.main(app, express);
		router.routes.api(app, express);

		return true;
	}
}

module.exports = router;