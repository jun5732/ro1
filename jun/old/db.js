const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: '45.120.69.37',
    // port: '3306',
    user: 'jun',
    password: '@As73016463',
    database: 'coin'
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
 
var testQuery = "select * from myticker;";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM MEMBERS";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료