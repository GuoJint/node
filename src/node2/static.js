const express = require('express')
const path = require('path')
const app =express()

app.use(express.static(path.join(__dirname,'./img')))
console.log(path.join(__dirname,'./img'))

app.listen(3000,()=>{
    console.log("server start")
})