var express = require("express");
var ejs = require("ejs");
var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); 
app.engine("html", ejs.renderFile);
app.use(express.static(__dirname + "/public"));
var controller1 = require("./router/controller1")(app);

var server = app.listen(3000, function(){
    console.log("서버가 가동되었습니다");
});