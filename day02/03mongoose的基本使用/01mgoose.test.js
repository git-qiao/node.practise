//任务：
//   1.引入mongoose模块
//   2.利用该库，链接上数据库
//   3.利用事件判断是否连接成功 (可以用on绑定，也可以用once绑定代表只执行一次)
//   4.连接成功后，对数据进行操作

//mongoose引入
const mgs = require('mongoose')

//链接数据库
mgs.connect('mongodb://localhost:27017/mgs_test',{ useNewUrlParser: true })


//创建一个promise实例
let promise = new Promise((res,rej)=>{//异步代码
  //绑定监听，查看数据的连接状态
  mgs.connection.once('open',err=>{
    if (err) { //失败
      rej(err)
      //throw err;
      console.log(err);
    } else {   //成功
      console.log('链接数据库成功');
      //成功回调
      res()
    }
  })
})


//1.直接promise操作方式1
/*promise
  .then(()=>{
    console.log('链接成功的操作')
  },(err)=>{
    console.log(err)
  })*/

//2.直接promise操作方式2
/*
promise
  .then(data=>{
    console.log('连接成功的操作')
  })
  .catch(err=>{
    console.log(err);
  })*/

//3.async方式
/*test()
async function test() {
  await promise;
  console.log('连接成功的操作async')
}*/

//4.async方式的简写
;(async()=>{
  await promise;
  console.log('连接成功的操作async简写')
})()
