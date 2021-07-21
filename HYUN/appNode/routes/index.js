var express = require('express');
var router = express.Router(); 
var cal = require('../function/calculate') 

//기본 get 페이지
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render("main.html") 

});                                       
                                           

/* GET home page. */
router.get('/result', function(req, res, next) {

  res.render("result.html", {egl:req.query.egl});

});

//form 태그 관련
router.post('/form_receiver', function(req, res){ //app.post(,) : 라우팅 메서드

  console.log(cal.cal_egl(req.body.cb, req.body.df, req.body.fat ,req.body.pr));
  
  res.redirect("/result?egl="+ cal.cal_egl(req.body.cb, req.body.df, req.body.fat ,req.body.pr).toFixed(2));

});

module.exports = router;
