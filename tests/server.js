var assert = require('assert');

var express = require('express');
var app = express();

describe('Server', function ()
{
	describe('Testing Router', function ()
	{
		it('Calling Route Method', function ()
		{
			var router = require('../router');

			assert.equal(router.Route(app, express), true);
		});
	});
});