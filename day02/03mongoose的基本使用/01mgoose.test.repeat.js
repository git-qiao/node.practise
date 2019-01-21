//任务：
//   1.引入mongoose模块
//   2.利用该库，链接上数据库
//   3.利用事件判断是否连接成功
//   4.连接成功后，对数据进行操作

//mongoose引入
const mgs = require('mongoose')

//链接数据库
mgs.connect('mongodb://localhost:27017/mgs_test',{ useNewUrlParser: true })


let promise = new Promise((res,rej)=>{
    mgs.connection.once('open',err=>{
      if (err){
        rej(err)
        console.log(err);
      }else{
        res()
        console.log('链接数据库成功');
      }
    })
})
;(async()=>{
  await promise;
  console.log('开始操作了')
})()


