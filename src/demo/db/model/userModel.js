var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    user : { type:String ,required:true},
    psw : { type:String ,required:true},
    age: Number,
    sex: {type:Number,default: 0}
})
//将schema对象转化为数据模型
var User = mongoose.model('user',userSchema)

module.exports = User