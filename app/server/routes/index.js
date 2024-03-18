var express = require('express');
var router = express.Router();
const {createSSRApp} = require('vue');
const {renderToString} = require('@vue/server-renderer');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) { return res.render('home'); }
  next();
}, function(req, res, next) {
  return res.render('index', { user: req.user });
});

module.exports = router;