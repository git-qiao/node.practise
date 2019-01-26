/*
* 路由器：
*   可以理解为一个小型的APP对象
*
* 作用：
*   虽路由进行分类管理
*
* 用法：
*   1.获取router: express.Router()
*   2.实例化一个router对象： new Router()
*   3.暴露实例化对象
*
* */
// 所有页面的切换路由，get
const express = require('express')
const Router = express.Router
const router = new Router()

//处理路径
const path = require('path')

//登陆几面路由
router.get('/login',(res,req)=>{
  const filePath = path.resolve(__dirname,'../public/login.html')
  req.sendFile(filePath)
})

//注册页面路由
router.get('/register',(res,req)=>{
  const filePath = path.resolve(__dirname,'../public/register.html')
  req.sendFile(filePath)
})

module.exports = router