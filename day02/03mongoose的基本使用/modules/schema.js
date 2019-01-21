/**
 * Created by Joe on 2019/1/21.
 */
let {mgs} = require('./modules')

//链接要操作的数据库
mgs.connect('mongodb://localhost:27017/mgs_test',{ useNewUrlParser: true })

//链接数据库
exports.pms = new Promise((res,rej)=>{
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

// exports.pms = pms