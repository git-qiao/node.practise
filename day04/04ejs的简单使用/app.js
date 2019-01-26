const express = require('express')
const app = express()
const PORT = 2000
//隐藏express技术栈
app.disable('x-powered-by')
//暴露静态资源
app.use(express.static('public'))


app.get('/',(req,res)=>{
  res.send('1111111111')
})


app.listen(PORT,err=>{
  if (err){
    console.log(err);
  }else{
    console.log('服务器搭建成功，端口是：'+PORT)
  }
})