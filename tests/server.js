var assert = require('assert');

var express = require('express');
var app = express();

describe('Server', function ()
{
	describe('Testing Router', function ()
	{
		it('Calling Router Method', function ()
		{
			var router = require('../router');

			assert.equal(router(app, express), true);
		});
	});
});