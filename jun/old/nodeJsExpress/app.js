var cookieParser = require('cookie-parser');
var logger = require('morgan');

var RouterMain = require('./routes/main');
var RouterResult = require('./routes/result');

var app = express();


// view 경로 설정
app.set('views', __dirname + '/views');
// 화면 engine을 ejs로 설정
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());