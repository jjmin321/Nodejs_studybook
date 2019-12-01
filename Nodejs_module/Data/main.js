// express 모듈 사용
// express함수를 다룰 app 변수 선언

// 익스프레스 세팅해주고요. html파일같은거 랜더링할거
// 익스프레스 뷰 엔진 ejs로 설정하고요
// 익스프레스 엔진은 ejs쓴다고 하고 ejs.renderFile써주세요.

// 라우터 변수 선언해서 라우터폴더경로지정해주시고 
// 익스프레스 쓴다고 주세요.

// 3000번 포트에 서버 여시고 서버가 가동중이라고 띄워줘요
var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

var router = require("./router/controller")(app);

var server = app.listen(3000, function(){
    console.log("서버 가동중입니다");
});