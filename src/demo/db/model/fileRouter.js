const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
    //指定文件路径
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    //指定文件名
    filename:function(req,file,cb){
        cb(null,'aaa.jpg')
    }
});

var upload = multer({
    storage:storage
});

/**
 * @api {post} /file/upload 上传图片
 * @apiName 上传图片
 * @apiGroup    Food
 * 
 * @apiParam  {Number} pagesize 每页数据条数.  
 * @apiParam  {Number} page 页数.   
 * 
 * @apiSuccess  {String}    ff
 */
router.post('/upload',upload.single('hehe'),(req,res)=>{
    //single中的hehe必须与前端的key值统一
    console.log(res.file)
})
module.exports = router

