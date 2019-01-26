const express = require('express')
const app = express()
const PORT = 2000
app.use(express.static('public'))
//使用内置中间介解析post请求体
app.use(express.urlencoded({extended:true}))

//get路由
app.get('/test',(req,res)=>{
  console.log(req.query);
  res.send('ajax的get请求-----'+req.query.name)
})
app.get('/one',(req,res)=>{
  // console.log(req.query);
  res.send(req.query.age)
})

//post路由
app.post('/test2',(req,res)=>{
  // console.log(req.body);
  res.send('ajax的post请求-----'+req.body.age)
})

//post路由
app.post('/two',(req,res)=>{
  // console.log(req.body);
  res.send('ajax的post请求2-----'+req.body.b)
})

app.listen(PORT,err=>{
  if(!err){
    console.log('端口号是：'+PORT)
  }else{
    console.log(err);
  }
})