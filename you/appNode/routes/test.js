var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tests', function(req, res, next) {
  
  res.render("test.html")

});





module.exports = router;
