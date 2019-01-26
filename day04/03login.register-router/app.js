//引入express
const express = require('express')
//引入UI路由
const uiRouter = require('./router/uiRouter')
//引入users路由
const usersRouter = require('./router/usesRouter')
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


db
  .then(()=>{
    //使用ui路由
    app.use(uiRouter)
    //使用post路由
    app.use(usersRouter)

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