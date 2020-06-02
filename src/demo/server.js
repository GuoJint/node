const express = require('express')
const db = require('./db/connect')
const app = express()


//引入luyou
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')
const fileRouter = require('./router/fileRouter')

//中间件
//通过cors来进行跨域
const cors = require('cors')
//通过bodyparse来解析post的body数据
const bodyparse = require('body-parser')
//通过path来获取文件地址
const path = require('path')

//第三方插件
const request = require('request')

app.use(cors())
app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.use('./file',fileRouter)
app.use('/user',userRouter)
app.use('/food',foodRouter)
app.use('/public',express.static(path.join(__dirname,'./api')))


//代理    让页面访问本地服务器，在本地服务器通过request插件来进行服务器间的请求，获取数据然后返回到页面
app.get('/cors',(req,res)=>{
    request('http://www.baidu.com',(err,res,body)=>{
        if(!err){
            res.send(body)
        }
    })
})


app.listen(3000,()=>{
    console.log('server start')
})