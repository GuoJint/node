const express = require('express')
const app=express()

let userRouter = require('./router/userRouter')

//全局自定义中间件（拦截器）
app.use('/',(req,res,next)=>{
    let {token} = req.query
    if(token){
        next()
    }else{
        res.send('缺少token')
    }
})
//局部自定义中间(只有reg会执行该中间件)
app.get('/reg',(req,res,next)=>{
    next()
},(req,res)=>{
    res.send('test')
})
//第三方中间件
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('server start')
})