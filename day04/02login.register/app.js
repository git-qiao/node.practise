//引入express
const express = require('express')
//引入数据库模块
const db = require('./db/link.database')
//引入数据库模型对象模块
const UsersModel = require('./models/users')
//端口
const PORT = 2000
//创建应用
const app = express()
//禁用请求头中express的显示
app.disable('x-powered-by')
//使用内置中间介解析post请求体
app.use(express.urlencoded({extended:true}))
//暴露静态文件
app.use(express.static('public'))

/*;(async ()=>{
  await db;
  //注册路由
  app.post('/register',async(req,res)=>{
    const {usn,psd,rPsd,email}=req.body
    /!*console.log(usn,rPsd,email)
    console.log(req.body)*!/
    await UsersModel.create({usn,psd,rPsd,email})
    res.send('成功了')

  })

  //登陆路由
  app.post('/login',(req,res)=>{
    // const {usn,psd,rPsd,email} = req.body
    //console.log(req.query);
    res.send('111111111')
  })
})();*/
db
  .then(()=>{

    //注册路由
    app.post('/register',async(req,res)=>{
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
          res.send(email+'用户注册成功')
          return
        }else{
          res.send(email+'已经被注册过，请输入另一个邮箱')
        }
      }catch(e){
        console.log(e);
        res.send('网络不稳定，请稍后再试')
      }


    })

    //登陆路由
    app.post('/login',async(req,res)=>{
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

    //登陆几面路由
    app.get('/login',(res,req)=>{
      req.sendFile(__dirname+'/public/login.html')
    })

    //注册页面路由
    app.get('/register',(res,req)=>{
      req.sendFile(__dirname+'/public/register.html')
    })
  })
  .catch(err=>{
    console.log(err);
  })

//监听端口
app.listen(PORT,(err)=>{
  if (err){
    console.log(err);
  }else {
    console.log('连接成功，端口号是：2000');
  }
})