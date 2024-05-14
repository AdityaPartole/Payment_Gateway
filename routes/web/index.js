// Imports
var express = require('express');
var router = express.Router();

/**
 * Home page
 * 
 */
router.get('/', function(req, res, next) {
	res.render('pages/index', { 
		title: 'B1_CN_Project'
	});
});

module.exports = router;