module.exports = function(app){
    app.get("/", function(req, res){
        res.send("안녕 ㅎㅎ");
    });
    app.get("/test1", function(req, res){
        res.send("반가워 ㅎㅎ 난 TEST1이라구 해 ㅎㅎ");
    });
};