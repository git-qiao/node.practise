//1.引入express库
const express = require('express')
//引入中间介 body-parser
const bodyParser = require('body-parser')
const PORT = 2000

//2.创建服务
const app = express()
app.disable('x-powered-by')

//使用body-parser去解析post的请求体
app.use(bodyParser.urlencoded({extended:true}))

/*
 * 中间件（middleWare）
 *    中间件实质上就是一个函数，有三个参数（request,response,next）
 *
 * 组成：
 *   1.request 对象
 *   2.response 对象
 *   3.next 函数
 *
 * 作用：
 *   1.执行任意业务代码。
 *   2.修改请求和响应对象（request,response）
 *   3.调用下一个中间件
 *
 * 分类：
 *   1.应用级中间件：
 *       修改请求和响应对象，拦截非法请求
 *   2.第三方中间件：
 *       不是express提供的，我们自己下载的
 *       app.use(bodyParser.urlencoded({extended:true}))
 *   3.内置中间件：
 *       express内置的中间件
 *       app.use(express.urlencoded({extended:true}))
 *
 *   4.路由器中间件
 *       Router
 *
 *    1.在express中，路由和中间件定义的时，根据定义的顺序（代码的顺序）把中间件和路由放在一个
 *       类似于数组的容器中，当请求到达的时候，依次取出数组容器中的路由和中间件，
 *       匹配能处理该请求的路由和中间件。应用级中间件默认接收所有请求。
 *    2.在express中还可以使用普通定义函数的方式，去定义中间件，使用的时候在路由中，在传入一个回调函数即可。
 *    3.客户端发来一次请求之后，服务器会做出一次回应，并且在回应之后，不可以再修改req，res对象。
 *    4.客户端的一次请求，到达服务器的时候，就是一个请求对象和一个响应对象，其他所有的中间件和路由
 *       都是对其的引用。
 * */
function middle(req,res,next){
  const hostName = req.get('host')
  console.log(hostName);
  if (hostName!=='localhost:2000'){
    res.send('非法了')
  }else{
    next()
  }
}

//处理get请求
app.get('/',middle,(req,res)=>{
  //请求部分
  //响应部分
  res.send('根路由2')
})

//处理post请求
app.post('/test',(req,res)=>{
  //获取到请求体
  const data = req.body
  console.log(data);
  res.send(`您的姓名是${data.name}----年龄是${data.age}`)
})

//3.监听端口
app.listen(PORT,(err)=>{
  if (err){
    console.log(err);
  }else{
    console.log('服务开启成功，端口：'+PORT)
  }
})