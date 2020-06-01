### 模块化
 + 内置模块（node中已经提供的）
  -文件操作
 + 第三方模块
 + 自定义模块
  -创建一个模块
  -导出一个模块
  -引用一个模块

### 内置模块 fs

### 内置模块 url

### 路径模块
 在文件操作过程中，都必须使用物理路径（绝对路径），path模块提供

### 爬虫案例
 1.获取目标网站 http.get
 2.分析网站内容 cheerio
 3.获取有效信息 下载或者其他操作

 ### express框架 书写api

 #### 什么是api
ajax 2007
前后端分离

通过api 接口实现数据的请求

前端：1.写界面 2.请求数据 3.数据处理
后端：写api接口

登录接口逻辑分析
1.接受用户传递数据
2.处理数据
3.返回数据

### experss 基本使用

1.安装express

### 服务器相关

服务器：1.服务器就是一台电脑  2.服务器软件  3.服务器ip 和端口号
ip:确定服务器主机的位置
port：确定服务器里某一个程序

### api接口的书写
  +接受数据
    - get req.query
    - psot req.body 需要body-parser 插件进行解析 
      +注意数据格式（前后端数据格式的统一） json x-www-form-urlencode formdata

### 中间件 middlewear
      + 内置中间件 static
      + 自定义中间件
      + 第三方中间件 （body-parser） （拦截器）

### 静态资源目录 static
    指定一个目录 目录可以被访问

 ### 非关系数据库(文档) MongoDB

 #### 指令
  mongodb  数据库名 
  mongod   命令行启动数据库命令
  mongo    命令行操作数据库指令
  mongoose node操作数据库的插件

  ### promise

  大量的异步操作，如果需要顺序执行 通过回调函数执行 ，回调地狱

  通过promise 解决回调地狱


  1.封装promise函数
  、、、
  function test(){
    return new Promise((resolve,reject)=>{
      成功 resolve
      失败 reject
    })
  }
  、、、
  2.根据顺序 形成链式调用
  test().then().then().catch()
  3.捕获错误
  ### node操作MongoDB数据库

  + mongod
  + mongoose

  ###
  1.注册登录 mongod
  2.验证码逻辑接口实现
    a.验证用户名存在
    b.获取验证码

     1.获取邮箱验证码接口 1发送邮件 2邮箱和验证码保存到内存中
     2.五分钟内 只能发送三次
     2.设置一个ctime为时间戳，当第一次发送时设置ctime为当前的时间戳，第二次发送前对比时间戳如果大于5分钟则替换本次，如果没有大于五分钟则count加一

  3.apidoc 自动生成api接口文档