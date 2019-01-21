/**
 * Created by Joe on 2019/1/21.
 */

/*
* 1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作。
* 2.在NodeJs中，你给我们提供了一个模块，叫做fs模块，专门用户操作文件。
* 3.fs模块是Node的核心模块，使用的时候，要引入进来，不用下载安装。
*
* 简单文件写入：
*   fs.writeFile(file, data[, options], callback)
*           --file : 写入文件的路径+文件名
*           --data ：写入的数据
*           --options ：配置对象
*                 --flag：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "r" ：读取
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*           --callback：回调函数
*
*  在Node中有一个这样的设计，叫做：错误优先。
*
*
* */

let fs = require('fs');
const data = '哈哈哈哈\n呵呵呵2\n呵呵哈哈哈h';
fs.writeFile('./one.txt',data,(err)=>{
  if (err) throw err;
  console.log('文件已经保存了')
});






















