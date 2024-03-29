var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) { return res.render('home'); }
  next();
}, function(req, res, next) {
  return res.render('index', { user: req.user });
});

module.exports = router;