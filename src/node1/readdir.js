//打印当前目录树
const fs = require('fs')

//同步读取
let dirs = fs.readdirSync('../')
console.log(dirs)

//异步读取
fs.readdir('./',(err,data)=>{
    //先判断是否有错误
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
//可以通过try catch 和错误优先来进行错误捕捉
//try中放可能出错的代码
//如果出错了则报出catch中的error