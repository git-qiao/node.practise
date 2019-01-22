//引入链接数据库模块
let pms = require('./db/link.database')
//引入文档对象模型模块
let StudentsModel = require('./model/students')

;(async()=>{
  await pms;

  //添加数据/文档
  StudentsModel.create({
    age: 11,
    name: '哈哈2'
  },(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log('成功了',data)
    }
  })
  StudentsModel.deleteOne({
    age: 19
  },(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log('成功了',data)
    }
  })


})()

