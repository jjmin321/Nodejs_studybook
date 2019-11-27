var fs = require("fs");

fs.writeFile("data1.txt", "Hello node.js", function(error){
    console.log("비동기식 저장 1");
});

fs.readFile("data1.txt", function(error, data){
    console.log(data.toString());
});

fs.appendFile("data1.txt", "안녕하세요 노드점제이에스", function(error){
    console.log("비동기식 추가 1");
});

fs.readFile("data1.txt", function(error, data) {
    console.log(data.toString());
});

fs.writeFileSync("data2.txt", "Hello node.js");
console.log("동기식 저장 1");

var data = fs.readFileSync("data2.txt");
console.log(data.toString());

fs.appendFileSync("data2.txt", "안녕하세요 노드점제이에스");
console.log("동기식 추가 1")

var data2 = fs.readFileSync("data2.txt");
console.log(data2.toString());