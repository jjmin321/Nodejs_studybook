const express = require("express")
const app = express()
const port = 7777

app.get('/', (req, res) => res.send("Hello world!"))

app.listen(port, () => console.log(`start at ${port}`))