var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) { return res.render('home'); }
  next();
}, function(req, res, next) {
  return res.render('index', { user: req.user });
});


router.post('/test', (req,res)=>{
  if(req.body.msg){
  console.log("asked")
}
},
function(req,res,next){
return  res.send({message:`It is ${req.user}`});
})

module.exports = router;