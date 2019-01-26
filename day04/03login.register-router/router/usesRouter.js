/*
 * 该路由器负责用户注册、登录的业务逻辑，会操作数据库
 * */
const express = require('express')
const UsersModel = require('../models/users')
const {Router} = express
const router = new Router()

//注册路由
router.post('/register',async(req,res)=>{
  /*
   * 1.获取用输入
   * 2.校验数据的合法性
   * 3.查询数据库，该邮箱是否注册过
   * 4.如果注册过，驳回请求，如果没有，将内容写入数据库
   * */
  const {usn,psd,rPsd,email}=req.body;

  const usnReg = /^[a-zA-Z0-9_]{3,10}$/;
  const psdReg = /^[a-zA-Z0-9_.]{3,6}$/;
  const emailReg = /^[a-zA-Z0-9]{3,10}@[a-z]{2,6}\.[a-z]{2,3}$/;
  if (!usnReg.test(usn)){
    res.send('用户名-请输入3-8位，只能是字母/数字/_')
    return
  }
  if (!psdReg.test(psd)){
    res.send('密码-请输入3-6位，只能是字母/数字/_/.')
    return
  }
  if (psd !== rPsd){
    res.send('请两次密码输入不一致')
    return
  }
  if (!emailReg.test(email)){
    res.send('邮箱格式错误')
    return
  }

  try{
    const findData = await UsersModel.findOne({email})
    console.log(findData);
    if (!findData){
      //没有注册过写入数据库
      UsersModel.create({usn,psd,email})
      console.log('账户：'+usn+'邮箱：'+email+'注册成功')
      res.send(email+'用户注册成功');
    }else{
      res.send(email+'已经被注册过，请输入另一个邮箱')
    }
  }catch(e){
    console.log(e);
    res.send('网络不稳定，请稍后再试')
  }
})

//登陆路由
router.post('/login',async(req,res)=>{
  const {email,psd} = req.body
  const psdReg = /^[a-zA-Z0-9_.]{3,6}$/;
  const emailReg = /^[a-zA-Z0-9]{3,10}@[a-z]{2,6}\.[a-z]{2,3}$/;
  //console.log(!emailReg.test(email))
  if (!emailReg.test(email)){
    res.send('邮箱格式错误')
    return
  }
  if(!psdReg.test(psd)){
    res.send('密码-请输入3-6位，只能是字母/数字/_/.')
    return
  }

  try{
    const loginData = await UsersModel.findOne({email,psd})
    if(!loginData){
      res.send('邮箱或密码错误！')
    }else{
      res.redirect('https://www.baidu.com')
    }
  }catch(e){
    console.log(e);
    res.send('网络不稳定，请稍后再试')
  }
})

module.exports = router

