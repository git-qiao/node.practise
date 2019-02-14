const express = require('express')
const app = express()
const PORT = 2000
app.use(express.static('public'))
//使用内置中间介解析post请求体
app.use(express.urlencoded({extended:true}))

//get路由
app.get('/',(req,res)=>{
  console.log(req.query);
  // 模拟请求延迟
  setTimeout(()=>{
    //每次请求 返回一个随机数
    res.send(Math.floor(Math.random()*10000).toString())
  },2000)
})

app.listen(PORT,err=>{
  if(!err){
    console.log('端口号是：'+PORT)
  }else{
    console.log(err);
  }
})