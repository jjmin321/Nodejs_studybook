// var http = require("http");
// var url = require("url");

// var server = http.createServer(function(req, res){

//     var q = url.parse(req.url, true);

//     res.writeHead(200, {"content-type" : "text/html"});
//     console.log(q);

//     res.write(
//         `<!doctype html>
//          <html>
//          <head>
//          <meta charset='utf-8'/>
//          </head>
//          <body>
//         `
//     )

//     switch(q.pathname){
//         case "/" :
//                 res.write(`<h1>root 입니다</h1>`);
//                 res.write("<a href='test1?data1=111'>test1</a><br/>")
//                 res.write("<a href='test2?data1=222'>test2</a><br/>")
//                 break;
//         case "/test1" :
//                 res.write(`<h1>test1 입니다</h1>`);
//                 res.write(`<h1>data1 : `+q.query.data1 + "<br/>");
//                 break;
//         case "/test2" :
//                 res.write(`<h1>test2 입니다</h1>`);
//                 res.write(`<h1>data1 : `+q.query.data1+ "<br/>");
//                 break;
//     }

//          res.write(
//         `
//          </body>
//          </html>
//          `
//         );
//     res.end();
// });

// server.listen(3000);

var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    res.write(
        `<!doctype html>
        <html>
        <head>
        <meta charset='utf-8'/>
        </head>
        <body>
        `
    );
    switch (q.pathname){
        case "/" :
            res.write("<h1>당신은 /를 누르셨습니다</h1>");
            res.write("<h2>data : "+q.query.data+"<br/>");
            res.write("<a href='test1?data1=data1'>test1</a><br/>");
            res.write("<a href='test2?data2=data2'>test2</a><br/>");
            break;
        case "/test1" :
            res.write("<h1>당신은 /test1를 누르셨습니다</h1>");
            res.write("<h2>data1 : "+q.query.data1+"<br/>");
            res.write("<a href='/'>/</a><br/>");
            res.write("<a href='test2?data2=data2'>test2</a><br/>");
            break;
        case "/test2" :
            res.write("<h1>당신은 /test2를 누르셨습니다</h1>");
            res.write("<h2>data2 : "+q.query.data2+"<br/>");
            res.write("<a href='/'>/</a><br/>");
            res.write("<a href='test2?data2=data2'>test2</a><br/>");
            break;
    }
    res.write(
        `
        </body>
        </html>
        `
    )
    res.end();
});
server.listen(3000);














