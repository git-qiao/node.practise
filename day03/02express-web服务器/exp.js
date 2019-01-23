const exp = require('express')

const server = exp()

server.disable('x-powered-by')

//绑定get请求
server.get('/',(req,res)=>{

  console.log(req.query);

  res.send('<h2>h2的标sdsf题是的</h2>')

})

//绑定post请求
server.post((req,res)=>{

})

server.listen(2001,err=>{
  if (err){
    console.log(err);
  }else{
    console.log('服务启动。端口号2001')
  }
})