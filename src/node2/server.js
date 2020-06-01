const express = require('express')
const app=express()
//express 实例化
const bpdyparser = require('body-parser')
//app.use 使用中间件（插件）
//解析表单数据 
app.use(bodyparser.urlencoded({extend:false}))
//解析json
app.use(bodyparser.json())

app.get('/user/login',(req,res)=>{
    //接受get参数，获取用户信息
    let {user,psw} = req.query
    //处理数据
    console.log(`${user}  ${psw}`)
    if(user=='gjt'&&psw==123){
        res.send({err:null,msg:'login ok'})
    }else{
        res.send({err:1,msg:'user or psw is not current'})
    }
})

//post接口不能再浏览器访问，可使用postman
app.post('user/reg',(req,res)=>{
    //express不能直接解析消息体
    //通过第三方的插件实现解析 body-parser
    let {user,psw} = req.body
})
app.listen(3000,()=>{
    //开启服务器
    console.log('开启服务器')
})

//http://localhost:3000/user/login