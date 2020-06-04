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


  ### 跨域解决
  1.cors跨域
    通过下载cors插件并引入来进行cors跨域（简单）
  2.代理跨域
    在自己页面请求自己的服务器，再由自己的服务器请求他人服务器
    原理：页面通过ajax访问他人服务器因为同源策略会产生跨域问题，而当服务器与服务器之间进行访问则不会产生跨域问题，所以可以通过以上方法来跨域
    方法：通过request插件来进行服务器间的访问
  
  ### 图片上传
    #### 注意要点
      1.设置图片的名称与后缀

  ### websocket
    聊天室实现可以通过与后端创建多个连接通过广播的形式来进行发送信息。

    创建一个聊天室的连接，当点击进入聊天室后与后端ws进行连接。
    一个人发送消息给后端，后端再把这个消息转发给其他与其连接的客户端

    什么时候使用长连接
    1.实时刷新
    2.服务器端发起数据

    时间换空间 空间换时间
  
  ### 身份验证

  1.登录时候 发布一个加密字符串 （用户相关信息）给前端
  2.调用其他接口 将加密字符串作为参数传递给服务器
  3.根据权限进行验证

  session + cookie
  cookie-parser 解析cookie
  express-session 

  //引入cookie-parser  express-session
  配置session选项，拦截除登录路由外的其他路由，并在回调函数中进行session 的判断.
  cookie会在前端自动添加，并自动携带

  跨域时cookie和session不能使用

  JWT
  引入jsonwebtoken 创建工具util下的jwt.js
  在jwt中引入，并创建createtoken和checktoken函数在createtoken函数中返回jwt.sign颁发的token,并在login方法中将token传给前端
  在其他路由中引入checktoken进行拦截判断token是否合法。同时可以在创建时的palyload中添加创建时间（时间戳）和过期时间，两时间相加然后与当前时间对比来判断是否过期