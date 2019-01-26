/*
* COOKIE：
*   1.概念-
*     本质上就是浏览器存储的一个字符串，里面包含着一些客户端和服务器交互时产生的信息
*     存储的形式是 ksy-value的形式
*
*   2.原理：
*     （PS:cookie不一定都由后台产生，前端通过js一样能生成cookie，很少使用）
*     （PS:cookie一般都由后台‘种’的）
*     -当浏览器第一次请求服务器的时候，服务器可能返回一个或多个cookie，包裹在响应头中
*     -浏览器接收到这个cookie，将这个cookie保存起来
*         会话cookie-保存在运行浏览器的那块内存中
*         持久化cookie-保存在用户电脑的硬盘中，并且过期后自动删除
*     -当浏览器再次向服务器发起请求的时候，自动携带之前的所有cookie，包裹再请求头中，发送给服务器
*     -服务器接受到cookie后，查看cookie中的内容，根据内容作出一些具体的业务逻辑
*
*   3.分类 ：
*     -会话cookie   （关闭窗口，cookie自动消失）
*     -持久化cookie （设置时间到期后，cookie自动消失）
*
*   4.应用--用来解决http无状态的特性（例7天免登陆）
*
*   5.在不同的语言，不同框架中cookie的具体语法不一样，但原理和过程一样的
*
*
* */

const express = require('express')
const app = express()
const PORT = 2000

app.get('/',(req,res)=>{
  // console.log(req.get('host'))
  res.send('12345')
})

app.get('/test1',(req,res)=>{
  //写入cookie
  // res.cookie('aa','aaaaaa-cookie')
  res.cookie('aa','aaaaaa-cccc',{maxAge:1000*60})
  res.send('test111111')
})

app.listen(PORT,(err)=>{
  if (err) {
    console.log(err);
  }else{
    console.log('服务器连接成功，端口号是：'+PORT)
  }
})