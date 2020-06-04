const express = require('express')
const router = express.Router()
const Mail = require('../utils/mail')
//数据模型
const User = require('../db/model/userModel')
const JWT = require('../utils/jwt')


let codes = {}
let sendTime = true



router.post('/logOut',(req,res)=>{
    req.session.destroy() //销毁保存的session
    res.send({err:0,msg:'已退出'})
})


/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup    User
 * 
 * @apiParam  {String} user 用户名.  
 * @apiParam  {String} psw 用户密码.  
 * @apiParam  {String} code 验证码.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/reg',(req,res)=>{
    //获取数据
    let {user,psw,mail,code} = req.body
    
    
    if(user&&psw&&code&&mail){
        console.log(codes)
        console.log(codes[mail]+"  sdsda  "+code)
        if(codes[mail] != code){ return res.send({err:-4,msg:'验证码或邮箱错误'})}
        User.find({user})
        .then((data)=>{
            if(data.length===0){
                return User.insertMany({user:user,psw:psw})
            }else{
                res.send({err:-3,msg:'用户名已存在'})
                return Promise.reject('用户名已存在')
            }
        })
        .then(()=>{
            res.send({err:1,msg:'ok'})
        })
        .catch((err)=>{
            console.log(err)
        })
    }else{
        return res.send({err:-1,msg:'参数错误'})
    }
    //数据处理
    //返回数据
})

/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup    User
 * 
 * @apiParam  {String} user 用户名.  
 * @apiParam  {String} psw 用户密码.   
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */

router.post('/login',(req,res)=>{
    let {user,psw} = req.body
    if(!us||!psw){ return res.send({err:-1,msg:'参数错误'})}
    User.find({user,psw})
    .then((data)=>{
        console.log(data)
        if(data.length>0){
            //使用sessioncookie方法
            // req.session.login = true
            // req.session.name = us
            
            //创建token然后将token返回给前端
            let token = JWT.checkToken({login:true,name:us})
            res.send({err:0,msg:'登录成功',token:token})
        }else{
            res.send({err:-2,msg:'用户名或密码输入错误'})
        }
    })
    .catch((err)=>{
        return res.send({err:-1,msg:err})
    })
})

/**
 * @api {post} /user/getMailCode 发送邮箱验证码
 * @apiName getMai
 * @apiGroup    User
 * 
 * @apiParam  {String} mail 邮箱.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/getMailCode',(req,res)=>{
    if(sendTime){
        let {mail} = req.body
        let code = parseInt(Math.random() * 10000) //产生随机验证码
        Mail.send(mail,code)
        .then(()=>{
            codes[mail] = code
            console.log(codes[mail])
            res.send({err:0,msg:'验证码发送成功'})
            sendTime = false
            setTimeout(() => {
                sendTime = true
            }, 300000);
        })
        .catch(()=>{
            res.send({err:1,msg:'发送失败'})
        })
    }else{
        res.send({err:-5,msg:'五分钟内不能重复发送'})
    }
    
})
module.exports = router