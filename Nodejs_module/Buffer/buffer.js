var buf1 = Buffer.alloc(10);
console.log(buf1);

var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

var size1 = Buffer.byteLength(buf1);
console.log(size1);

console.log(buf2.length); 

var buf3 = Buffer.from("abcd");
var buf4 = Buffer.from("가나다라");
console.log(buf3);
console.log(buf4);

console.log(Buffer.compare(buf1, buf3));
console.log(Buffer.compare(buf2, buf4));
var arr1 = [buf1,buf2,buf3,buf4];
var buf5 = Buffer.concat(arr1);
console.log(buf5);

var buf6 = Buffer.from("123456789");
var buf7 = Buffer.alloc(10);
buf6.copy(buf7, 0, 2, 5);
console.log(buf6);
console.log(buf7);

var arr2 = buf5.entries();
for(var str of arr2){
    console.log(str);
}

var buf8 = Buffer.from('abcd');
var buf9 = Buffer.from('abcd');
var buf10 = Buffer.from('zzzz');

console.log(buf8.equals(buf9));
console.log(buf8.equals(buf10));

var buf11 = Buffer.from('aaaaa');
console.log(buf11);
console.log(buf11.fill('b'));

var buf12 = Buffer.from("Hello Node.js");
console.log(buf12.includes("Node"));
console.log(buf12.includes("Javascript"));

console.log(buf12.indexOf("Node"))
console.log(buf12.indexOf("Javascript"));
console.log(buf12.lastIndexOf("Node"));

console.log(Buffer.isBuffer(buf12));
console.log(Buffer.isBuffer("o"));

console.log(buf12.toString());