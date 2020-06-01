const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true , useUnifiedTopology: true})

//连接数据库
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'))
db.once('open',function(){
    console.log('db ok')
})
// scheme 对象

//创建一个和集合相关的schema对象 类似表头

var userSchema = new mongoose.Schema({
    us : { type:String ,required:true},
    ps : { type:String ,required:true},
    age: Number,
    sex: {type:Number,default: 0}
})

//将schema对象转化为数据模型
var User = mongoose.model('user',userSchema)
//操作数据库
