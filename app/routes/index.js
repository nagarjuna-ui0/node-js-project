var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quiz', function(req, res, next) {
  res.render('list_test', { title: 'Express', 'layout':true});
});

router.get('/quiz/:quiz_url', function(req, res, next) {
  res.render('test_det', { title: req.params.quiz_url, action:req.query.action || '', active:req.query.active || false}); 
});

router.get('/launch_test/:test_url',function(req, res, next){
	res.render('question_ans', {title: req.params.test_url});
});
module.exports = router;
