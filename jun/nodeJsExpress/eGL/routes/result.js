var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/result', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/result', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
