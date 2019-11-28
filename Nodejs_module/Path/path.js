var path = require("path");

var basename1 = path.basename("~/abc/abc.txt");
console.log(basename1);

var dirname1 = path.dirname("~/documents/nodejs/nodejs_studybook/nodejs_module/path/path.js");
console.log(dirname1);

var dirname2 = path.dirname("path.js");
console.log(dirname2);

var extname1 = path.extname("~/abc/abc.txt");
console.log(extname1);

var extname2 = path.extname("abc.txt");
console.log(extname2);

var isAbsolute1 = path.isAbsolute("~/abc/abc.txt");
var isAbsolute2 = path.isAbsolute("abc.txt");
console.log(isAbsolute1);
console.log(isAbsolute2);

var join = path.join("aaa", "bbb", "ccc.txt");
console.log(join);

var normalize = path.normalize("~/documents/nodejs/../nodejs_studybook")
console.log(normalize);