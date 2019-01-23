/**
 * Created by Joe on 2019/1/22.
 */
const http = require('http')
const queryString = require('querystring')

//创建服务对象
const server = http.createServer((req,res)=>{
  /*
   * 关于请求：
   *   1.request 是请求对象，用户发送的消息都包含在这里
   *   2.response是响应对象，服务器给客户端的响应都在这里
   *   3.在浏览器的地址栏里输入网址，这种请求方式，是GET请求
   * */
  //设置请求
  const str = req.url.split('?')[1]
  console.log(queryString.parse(str));

  //设置相应头
  res.setHeader('content-type','text/html;charset=utf-8')
  //响应返回
  res.end('<h2>h2的标题是的</h2>')

})

//服务启动，监听端口
server.listen(3000,err=>{
  if(err){
    console.log(err);
  }else{
    console.log('服务启动成功，端口号：3000')
  }

})

