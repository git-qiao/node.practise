const mgs = require('mongoose')

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

module.exports = StudentsModel