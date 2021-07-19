var http = require('http');
var fs = require('fs');
var url = require('url');


function templateHTML(resultValue){
  return `
  <!doctype html>
  <html>
    <head>
      <title>GL (혈당부하지수) 란 특정 식품을 얼마나 많이 먹는지 반영한 값으로, 얼마나 빠른 속도로 소화되어  혈당 농도를 증가시키는지 객관적으로 표시한 지수
      </title>
      <meta charset="utf-8">
    </head>
<body>
  <style>      
    #login_wrapper { 
        border: 3px solid rgb(30, 7, 241);
        padding: 5px 20px;
        position: absolute;
        top: 30%;
        left: 30%;
        width: 550px; height: 500px;
        margin-left: -220px;
        margin-top : -170px;
        
        display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } 
    h1{
      font-size: 25px;
      padding-bottom: 20px;
    }
    form{
      width: 550px;
    }
    .form > div{
      display: flex;
      justify-content: center;
      padding-bottom: 7px;
      align-items: center;
      border: 3px;
      border-color: rgb(30, 7, 241);
      text-align: center;
    }
    .form > div > text{
          text-align: left;
          width: 500px;
        }
    label{
      text-align: center;
    }
    button{
      width: 100px;
      margin:auto;
      display:block;
    }
    input {
      padding: 5px;
      width: 300px;
    }
    .image 
    {
      position:relative;
      text-align:center;
      color:#FFFFFF; 
    }
    .image div 
    {
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black; 
    }
  </style>
  <div id="login_wrapper">
      <form action="http://localhost:3000/result" method="GET" >
        const element1 = document.getElementById("first");
        <table>
          <tr>
            <td style="width: 150px;"><img src="images/result.png"></td>  
            <td></td>
            <td></td>
            <td style="width: 350px;">
              <font size="2">GL (혈당부하지수) 란 특정 식품을 얼마나 많이 먹는지<br> 반영한 값으로, 얼마나 빠른 속도로 소화되어<br>혈당 농도를 증가시키는지 객관적으로 표시한 지수</font>
            </td>
          </tr>        
        </table>
      
      <div style="text-align: center;">
        <font size="5" >나의 추정 혈당 수취</font>
      </div>
      <br>

      <div class="image">
        <img width="190" src="images/result_top.png">
        <div><font size="50" >100</font></div>
      </div>
      
      <div style="text-align: center;">
        <img width="400" src="images/result_boot.png">
      </div>
    </div>  
  </form>
</body>
</html>
  `;
}

var app = http.createServer(function(request,response){
  
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
});