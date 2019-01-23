const http = require('http')
const queryString = require('querystring')
const PORT = 3000

const server = http.createServer((request,response)=>{

  //设置请求
  const str = request.url.split('?')[1]
  console.log(queryString.parse(str));

  //设置相应头
  response.setHeader('content-type','text/html;charset=utf-8')
  //处理响应
  response.end('<h2>h2的标题是的</h2>')

})

server.listen(3000,err=>{
  if (err){
    console.log(err);
  }else{
    console.log('服务启动成功，端口号是：'+PORT)
  }
})