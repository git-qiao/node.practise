/**
 * Created by Joe on 2019/1/21.
 */
/*
* fs.readFile(path[, options], callback)
*       --path:文件路径
*       --options：配置对象（可选）
*        --flag：打开文件要进行的操作,默认值"w"
*              "w" : 写入
*              "r" ：读取
*              "a" ：追加
*        --encoding：编码，默认值是"utf-8"
*       --callback：回调函数
*
* */
let fs = require('fs')
fs.readFile('./one.txt',(err,data)=>{
  if (err)throw err;
  //输入读取到的值
  console.log(data.toString())
  //写入到新的文件中
  fs.writeFile('./one2.txt','新的东西',err=>{
    if (err) throw err;
  })
})
