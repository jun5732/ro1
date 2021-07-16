var express = require('express');
var router = express.Router();


function ResultPage()
{
    return `
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        </head>
        <body>
        <a>hello</a>
        </body>
        </html>
    `;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.writeHead(200);
  // res.end(template);
  // res.write(ResultPage());
  res.render('main.html');
  // res.render('index', { title: ' ABC' });
});

module.exports = router;
