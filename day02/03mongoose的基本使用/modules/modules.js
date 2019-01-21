/**
 * Created by Joe on 2019/1/21.
 */
//引入mongoose模块
const mongoose = require('mongoose')
//全局配置避免错误 DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexe instead
mongoose.set('useCreateIndex', true)

//暴露出去
/*
module.exports = {
  mgs: mongoose
}*/
exports.mgs = mongoose
