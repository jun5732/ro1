
var express = require('express');
var router = express.Router();
var url = require('url');


router.get('/', (req, res) => {
  res.render('main.html');
})
router.get("/result", function(request, res){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var defultData = (0.393566429*(queryData.tan-queryData.sic))-(0.205486363*queryData.ji)-(0.006877061*queryData.dan*queryData.dan) -(0.012675566*queryData.sic*queryData.sic);
  var vResult = 0;
  if(queryData.tan - queryData.sic < 10)
    vResult = 3.2 + defultData;
  else
    vResult = 6.4 + defultData;

  res.render('result', {
    result : vResult.toFixed(2)
  });
});
module.exports = router;