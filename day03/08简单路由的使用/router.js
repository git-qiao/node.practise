const express = require('express')

const server = express()

//隐藏掉X-Powered-By: Expres
server.disable('x-powered-by')

const PORT = 2000


/*
 * request(请求对象上的常用方法)
 *     -request.query  get请求查询字符串的参数，拿到的是一个对象
 *     -request.params get请求路由的参数，拿到的是一个对象
 *     -request.body post请求体的参数，拿到的是一个对象
 *     -request.get(key) 获取请求头的某一项的值
 * response(响应对象)
 *     -response.send   告诉浏览器一个响应
 *     -response.end    告诉浏览器一个响应(容易乱码)
 *     -response.download  告诉浏览器下载一个文件
 *     -response.sendFile  给浏览器一个文件（直接打开）
 *     -response.redirect(url) 重定向
 *     -response.json({name:'ZS',age:12}) 返回json
 *     -response.set(key,value)  设置/自定义响应头
 *     -response.get(key)  获取响应头指定key对应的值（自定义的响应头一定能拿到）
 * */


//根路由
server.get('/',(req,res)=>{
  //请求体部分
  const host = req.get('host')
  console.log(host);

  //响应体部分
  // res.send('根路由返回')
  // res.set('content-type','text/html; charset=utf-8')
  res.set('haha','jkj')
  res.send('根路由返回end')
  // res.download('./q.png')
  // res.sendFile(__dirname+'/public/q.png')
  // res.redirect('https://www.baidu.com')
  // res.json({name:'就看见',age:100})
  console.log(res.get('host'))  //undefined
  console.log(res.get('haha'))  //jkj

})

//一级路由
server.get('/test',(req,res)=>{
  res.send('一级路由返回')
})

//二级路由
server.get('/test/one',(req,res)=>{
  res.send('二级路由')
})

//参数路由
server.get('/shop/:id',(req,res)=>{
  console.log(req.params);
  console.log(req.params.id);

  res.send('参数路由')
})


server.listen(PORT,err=>{
  if(err){
    console.log(err);
  }else{
    console.log('服务开始了，端口：'+PORT)
  }
})
