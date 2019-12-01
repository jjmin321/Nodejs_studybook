// 다른 파일의 모듈로 쓰이게끔 
// get방식으로 아무것도 입력하지 않으면 
// index.html를 화면에 띄워주게 해주세요.

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("index.html");
    });
    //get방식으로 parameter을 요청받으면 
    //render_data 를 선언해서 json형식으로
    //data1에는 요청받은 쿼리문 중 data1의 값
    //data2에는 요청받은 쿼리문 중 data2의 값을 넣고
    // parameter.html코드를 랜더링해줘라
    app.get("/parameter", function(req, res){
        var render_data = {
            data1 : req.query.data1,
            data2 : req.query.data2
        };
        res.render("parameter.ejs", render_data);
    })
}