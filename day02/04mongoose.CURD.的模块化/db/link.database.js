const mgs = require('mongoose')
//全局配置避免错误 DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexe instead
mgs.set('useCreateIndex', true)

mgs.connect('mongodb://localhost:27017/mgs_test',{ useNewUrlParser: true })

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