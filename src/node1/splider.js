// 请求网络请求
// 将数据保存到本地

//根据HTTP的简易爬虫，根据网站使用的协议来判断使用http/https
const http = require('https')
//根据fs来进行
const fs = require('fs')
const cheerio = require('cheerio')



http.get('https://www.bilibili.com/',(res)=>{
    //安全判断

    //状态码
    const { statusCode } = res;
    //文件类型
    const contentType = res.headers['content-type'];

    let error;
    //判断状态码
    if (statusCode !== 200) {
        error = new Error('请求失败\n' +`状态码: ${statusCode}`);
    //判断文件格式
    } else if (!/^text\/html/.test(contentType)) { //如果请求文件格式不为json格式则报错
        error = new Error('无效的 content-type.\n' +`期望的是 application/json 但接收到的是 ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // 消费响应数据来释放内存。
        res.resume();
        return;
    }

    //数据处理
    //绑定事件，当接受到数据时执行回调函数，当数据量较大时chunk为分段数据
    res.on('data',(chunk)=>{
        //chunk为接受的数据
        rawData += chunk
    })
    
    
    //当数据接收结束时执行该回调函数
    res.on('end',()=>{
        let $ = cheerio.load('rawData');
        $('img').each((idnex,el)=>{
            console.log($(el).attr('src'))
        })
    })
}).on('error',(err)=>{

})