const express = require('express')
const router = express.Router()
//数据模型
const foodModel = require('../db/model/foodModel')

/**
 * @api {post} /food/reg 添加菜品
 * @apiName 添加菜品
 * @apiGroup    Food
 * 
 * @apiParam  {String} name 菜名.  
 * @apiParam  {String} price 价格.  
 * @apiParam  {String} desc 描述.  
 * @apiParam  {String} typename 类型名称.  
 * @apiParam  {String} typeid 类型id.  
 * @apiParam  {String} img 菜图.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/add',(req,res)=>{
    let {name, price ,desc ,typename ,typeid ,img} =req.body
    //判断参数是否正确
    console.log(name)

    foodModel.insertMany({name, price ,desc ,typename ,typeid ,img})
    .then((data)=>{
        res.send({err:0,msg:"添加成功"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:"添加失败"})
    })
})

/**
 * @api {post} /food/findType 分类查询
 * @apiName 分类查询
 * @apiGroup    Food
 * 
 * @apiParam  {String} typeid 类型id.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */

router.post('/findType',(req,res)=>{
    let {typeid} = req.body
    foodModel.find({typeid})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:data})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:0,msg:'查询失败'})
    })
})

/**
 * @api {post} /food/findKeyWord 关键字查询
 * @apiName 关键字查询
 * @apiGroup    Food
 * 
 * @apiParam  {String} kw 关键字.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/findKeyWord',(req,res)=>{
    let {kw} = req.body
    let reg = new RegExp(kw)
    //名字或者描述
    //foodModel.find($or:[{name:{$regex:reg}},{desc:{$regex:reg}}]})
    foodModel.find({name:{$regex:reg}})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:data})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:0,msg:'查询失败'})
    })
    
})
/**
 * @api {post} /food/del id删除
 * @apiName id删除
 * @apiGroup    Food
 * 
 * @apiParam  {String} id id.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/del',(req,res)=>{
    let {_id,name, price ,desc ,typename ,typeid ,img} =req.body
    //删除多个时
    //foodModel.remove({_id:[id1,id2]})
    foodModel.updateOne({_id},{name, price ,desc ,typename ,typeid ,img})
    .then((data)=>{
        res.send({err:0,msg:"修改OK"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:0,msg:'修改失败'})
    })
    
})
/**
 * @api {post} /food/update 修改
 * @apiName id删除
 * @apiGroup    Food
 * 
 * @apiParam  {String} name 菜名.  
 * @apiParam  {String} price 价格.  
 * @apiParam  {String} desc 描述.  
 * @apiParam  {String} typename 类型名称.  
 * @apiParam  {String} typeid 类型id.  
 * @apiParam  {String} img 菜图. 
 * @apiParam  {String} _id id.  
 * 
 * @apiSuccess  {String}    ff
 * @apiSuccess  {String}    ff
 */
router.post('/del',(req,res)=>{
    let {_id} = req.body
    //删除多个时
    //foodModel.remove({_id:[id1,id2]})
    foodModel.remove({_id})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:data})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:0,msg:'删除失败'})
    })
    
})
module.exports = router