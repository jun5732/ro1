var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    
    console.log(queryData);
    console.log(pathname);
    // console.log("queryData -> " + queryData);
    // console.log("pathname -> " + pathname);
    
    if(pathname === '/')
    {
        var description = '';
        var template = '';
        if(queryData.id === undefined)
        {
            title = 'Welcome';
            description = 'Hello, Node.js';
        }
        // console.log(`data/${queryData.id}`);
        fs.readFile(`data/${queryData.id}` ,'utf8' ,function(err,sssssss)
            {
                if(sssssss != undefined)
                {
                    description = sssssss;
                }
                template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            }
        );
        
    }
    else
    {
        response.writeHead(404);
        response.end("Not Found");
    }
 
});
app.listen(3000);