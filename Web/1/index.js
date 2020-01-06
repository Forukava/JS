const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

const port = 3000

app.get('/', function(req,res){
    res.send('<h1>Hello</h1>')
})

app.listen(port, () => console.log(`Example app listening on port: ${port}`))
