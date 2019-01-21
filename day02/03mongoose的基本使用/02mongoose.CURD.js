const mgs = require('mongoose')
//全局配置避免错误 DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexe instead
mgs.set('useCreateIndex', true)

mgs.connect('mongodb://localhost:27017/mgs_test',{ useNewUrlParser: true })

let pms = new Promise((res,rej)=>{
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

;(async()=>{
  await pms;
  //1.获取Schema对象
  const Schema = mgs.Schema

  //2.创建约束,规则
  let studentsSchema = new Schema({
    name:{
      type: String,
      unique: true, //唯一
      required: true//必须
    },
    age:Number,
    sex:String,
    hobby:Array, //或者[String]
    info:Schema.Types.Mixed, //接受所有类型值
    date:{
      type:Date,
      default: Date.now()
    },
    enableFlag:{
      type: String,
      default:'Y'
    }
  })

  //3.创建模型对象
  let StudentsModel = mgs.model('students',studentsSchema)

  //4.创建document对象
  let stu1 = new StudentsModel({
    name: 'ZS',
    age: 20
  })
  //4.1保存数据
  /*stu1.save((err,data)=>{
    if (err){
      console.log(err)
    }else{
      console.log('数据保存成功了',data)
    }
  })*/

  //4.2保存数据2
  StudentsModel.deleteMany({
    age: 10
  },(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log('成功了',data)
    }
  })


})()

