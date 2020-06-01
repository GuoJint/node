const express = require('express')
const db = require('./db/connect')
const app = express()


//引入luyou
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')



const bodyparse = require('body-parser')
const path = require('path')


app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.use('/user',userRouter)
app.use('/food',foodRouter)
app.use('/public',express.static(path.join(__dirname,'./api')))

app.listen(3000,()=>{
    console.log('server start')
})