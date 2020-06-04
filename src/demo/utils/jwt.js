const jwt = require('jsonwebtoken')
const secret = 'a7601260'

function createToekn(palyload){
    palyload.ctime =Date.now() //创建时间
    palyload.exp = 1000*60*24*7
    return jwt.sign(palyload,secret)
}
function checkToken(token){
    return new Promise((reslove,reject)=>{
        jwt.verify(token,secret,(err,data)=>{
            if(err){
                reject('token验证失败')
            }else{
                reslove(data)
            }
        })
    })
}
module.exports={
    createToekn,checkToken
}