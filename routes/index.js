var express = require('express');
var router = express.Router();

router.get('/fileanalyse', function(req, res, next) {
  
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp Challenge: URL Shortener Microservice' });
});

module.exports = router;
