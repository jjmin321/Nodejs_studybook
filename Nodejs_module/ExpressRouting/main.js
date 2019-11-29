var express = require("express");
var app = express();
var controller1 = require("./router/controller1")(app);
var controller2 = require("./router/controller2")(app);

// app.get("/", function(req, res){
//     res.send("안녕 ㅎㅎ");
// });

// app.get("/test1", function(req, res){
//     res.send("반가워 ㅎㅎ 난 TEST1이라구 해 ㅎㅎ");
// });

// app.get("/test2", function(req, res){
//     res.send("반가워 ㅎㅎ 난 TEST2이라구 해 ㅎㅎ");
// });

// app.get("/test3", function(req, res){
//     res.send("반가워 ㅎㅎ 난 TEST3이라구 해 ㅎㅎ");
// });

var server = app.listen(3000, function(){
    console.log("서버 가동");
});