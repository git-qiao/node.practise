const mgs = require('mongoose')

//1.获取Schema对象
const Schema = mgs.Schema

//2.创建约束,规则
let usersSchema = new Schema({
  usn:{
    type: String,
    required: true//必须
  },
  psd: String,
  email: {
    type: String,
    required:true,
    unique:true
  },
  date:{
    type:Date,
    default: Date.now()
  }
})

//3.创建模型对象
let UsersModel = mgs.model('users',usersSchema)

module.exports = UsersModel