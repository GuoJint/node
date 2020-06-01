// const os = require('os')
// const cpus = os.cpus()
// console.log(cpus)
// const total = os.totalmem()
// console.log(total/1024/1024/1024)

const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('hello')
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("服务器启动成功")
})

