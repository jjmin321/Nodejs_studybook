var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

var router = require("./router/controller")(app);
var server = app.listen(3000, function(){
    console.log("서버 가동");
});