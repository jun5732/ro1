var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring')
 
function ResultPage(rlt)
{
    return `
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        </head>
        <body>
        ${rlt}
        </body>
        </html>
    `;
}
function ShowInputPage()
{
    return `
    <!doctype html>
    <html>
      <head>
        <title>섭취한 식품의 1회분량에 해당하는 영양소 함량을 입력하세요</title>
        <meta charset="utf-8">
      </head>
  <body>
    <div style="border: 3px solid rgb(30, 7, 241);padding: 5px 20px;position: absolute;top: 30%;left: 30%;width: 700px; height: 500px;margin-left: -220px;margin-top : -170px;display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <form action="http://localhost:3000/create_process" method="post" class="form" style="width: 550px">
          <table width="100%" style="text-align:left; border:none">
            <tr>
                <td colspan="2" ><img src="a.png"></td>  
                <td colspan="2" >
                  <table width="100%" style="text-align:center; border:none">
                    <td colspan="2" >
                      <font size="2">섭취한 식품의 </font>
                      <font size="5" >1회분량</font>
                      <font size="2">에 해당하는 영양소함량을 입력하세요</font>
                    </td>        
                  </table>
              </td>        
            </tr>        
        </table>
        <br>
          <div style="display: flex;justify-content: center;padding-bottom: 7px;align-items: center;">
            <a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
            <label style="flex: 1;text-align: left;">섭취 식품명</label>
            <input type="text" id="name" name="name" maxlength="20" style="text-align: left;width: 200px;">
            <a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
          </div>
          <br>
          <div style="display: flex;justify-content: left;padding-bottom: 7px;align-items: left;">
            <a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
            <label style="flex: 1;text-align: left;">탄수화물</label>
            <input type="text" id="tan" name="tan" maxlength="20" style="text-align: left;width: 200px;" >
            <a>&nbsp g </a>
          </div>
          <div style="display: flex;justify-content: center;padding-bottom: 7px;align-items: center;">
            <label style="flex: 1;text-align: left;">단백질</label>
            <input type="text" id="dan" name="dan" maxlength="20" style="text-align: left;width: 350px;" >
            <a>&nbsp&nbsp&nbsp&nbsp&nbspg</a>
          </div>
          <div style="display: flex;justify-content: center;padding-bottom: 7px;align-items: center;">
            <label style="flex: 1;text-align: left;">지방</label>
            <input type="text" id="ji" name="ji" maxlength="20" style="text-align: left;width: 200px;" >
            <a>&nbsp&nbsp&nbsp&nbsp&nbspg</a>
          </div>
          <div style="display: flex;justify-content: center;padding-bottom: 7px;align-items: center;">
            <label style="flex: 1;text-align: left;">식이섬유</label>
            <input type="text" id="sic" name="sic" maxlength="20" style="text-align: left;width: 200px;" >
            <a>&nbsp&nbsp&nbsp&nbsp&nbspg</a>
          </div>
          <br>
          <div style="display: flex;justify-content: center;padding-bottom: 7px;align-items: center;">
            <label style="flex: 1;text-align: left;">섭취분량</label>
            <input type="text" id="sup" name="sup" maxlength="20" style="text-align: left;width: 200px;" >
            <a>&nbsp화분</a>
          </div>
          <br>
          <button type="submit" id="btn_login" style="width: 100px;padding: 3px;margin:auto;display:block;">계 산</button>
          
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
    console.log(pathname);
    
    if(pathname === '/'){
        var template = ShowInputPage();
        response.writeHead(200);
        response.end(template);
    }else if(pathname === '/result'){        
        var body = "";
        var rlt = 0;
        request.on('data' ,function(data){
            body += data;
        });
        request.on('end' ,function(){
            var post = qs.parse(body);
            var dan  = post.dan;
            var ji   = post.ji;
            var name = post.name;
            var sic  = post.sic;
            var sup  = post.sup;
            var tan  = post.tan;
            var tmp = (0.393566429*(tan-sic))-(0.205486363*ji)-(0.006877061*dan*dan) -(0.012675566*sic*sic);
            
            if (tan - sic < 10) rlt = 3.2 + tmp;
            else    rlt = 6.4 + tmp;
            console.log(rlt);
            var template = ResultPage(rlt);
            response.writeHead(200);
            response.end(template);
        });
    }else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);