/*
* 链接数据库
* */

//引入mongoose模块
const mgs = require('mongoose')
//初始化所连接的数据的名
const DBNAME = 'users_demo'

//全局配置避免错误 DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexe instead
mgs.set('useCreateIndex', true)

mgs.connect('mongodb://localhost:27017/'+DBNAME,{ useNewUrlParser: true })

module.exports = new Promise((res,rej)=>{
  mgs.connection.once('open',err=>{
    if (err){
      console.log(err)
      rej(err)
    }else{
      console.log('连接良好')
      res(1)
    }
  })
})