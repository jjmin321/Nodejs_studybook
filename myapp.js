const express = require('express')
const app = express()
const port = 3000

//route, routing : 패스마다 다른 값을 반환해주게 도와줍니다.
app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', function(req, res){
    // return res.send('Hello world!'))
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.listen(port, function(){
    // return console.log(`Example app listeng on port ${port}!`)
// })