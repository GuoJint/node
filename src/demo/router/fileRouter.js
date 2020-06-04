const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
    //指定文件路径
    destination:function(req,file,cb){
        cb(null,'./static')
    },
    //指定文件名
    //文件名重复覆盖
    //后缀名发生改变
    filename:function(req,file,cb){
        let exts = file.originalname.split('.')
        let ext = exts[exts.length-1]
        let tmpname = (new Date()).getTime()+parseInt(Math.random()*9999)
        cb(null,`${tmpname}.${ext}`)
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
    let {size,mimetype,path} = req.file
    let types = ['jpg','jpeg','png','gif']
    let tmpType = mimetype.split('/')[1]

    if(size>(50*1024)){
        return res.send({err:-1,msg:'尺寸过大'})
    }else if(types.indexOf(tmpType) == -1){
        return res.send({err:-2,msg:'媒体类型错误'})
    }else{
        //将图片地址返回前端
        let url = `/public/img/${req.file.filename}`
        res.send({err:0,msg:'ok',data:url})
    }
    
    
    //single中的hehe必须与前端的key值统一
    console.log(res.file)
    // 放的是与图片相关的配置信息
    console.log(req.file)
})
module.exports = router

//创建静态目录static,在static中放入静态资源
//在server.js中通过path拼接把public转为static
//创建file路由，引入express，router与multer
//根据multer插件文档进行书写
//写入上传接口