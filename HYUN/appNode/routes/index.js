var express = require('express');
var router = express.Router(); 
var cal = require('../function/calculate') // calculate 함수 관련 변수 선언(=cal)

//기본 get 페이지
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render("main.html") 

});                                        //res 객체는 서버가 클라이언트에게 response 할 정보가 담겨 있음
                                           

/* GET home page. */
router.get('/result', function(req, res, next) {

  res.render("result.html", {egl:req.query.egl});

});

//form 태그 관련
router.post('/form_receiver', function(req, res){ //app.post(,) : 라우팅 메서드

  console.error(req);
  console.error(req.body.cb);
  console.error(req.body.df);
  console.error(req.body.fat);
  console.error(req.body.pr);

  console.log(cal.add(1,2));
  console.log(cal.sub(8,2,1));
  console.log(cal.cal_egl(req.body.cb, req.body.df, req.body.fat ,req.body.pr));
  
  res.redirect("/result?egl="+ cal.cal_egl(req.body.cb, req.body.df, req.body.fat ,req.body.pr).toFixed(2));

});


module.exports = router;
