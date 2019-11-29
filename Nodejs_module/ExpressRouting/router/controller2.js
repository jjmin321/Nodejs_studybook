module.exports = function(app){

    app.get("/test2", function(req, res){
        res.send("반가워 ㅎㅎ 난 TEST2라구 해 ㅎㅎ");
    });

    app.get("/test3", function(req, res){
        res.send("반가워 ㅎㅎ 난 TEST3이라구 해 ㅎㅎ");
    });


};