/**
 * Created by Joe on 2019/1/21.
 */
/*
* 流式文件写入：
*   特点--以流的形式操作文件，不再是将文件一次性的装在到内存中，效率高，减少服务器的压力
*
*
*
* fs.createWriteStream(path[, options])
*        --path：写入文件的位置（路径）
*           --options ：配置对象
*                 --flags：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "r" ：读取
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*                 --fd:文件描述符（文件索引）,默认：null
*                 --autoClose:自动关闭，当文件写入完毕的时候（水管里没有水了），自动关闭已经打开的文件，默认：true
*                 --start:写入开始的位置，默认：0
*                 --callback：回调函数
*
*
*  检测流开启和关闭的事件
*    1）open检测可写流打开
*    2）close检测可写流关闭
*
* */
let fs = require('fs')
let ws = fs.createWriteStream('./two.txt',{
  start:100
})

//检测可写流打开
ws.on('open',()=>{
  console.log('写开始了')
})

//检测可写流关闭
ws.on('close',()=>{
  console.log('写结束了')
})

console.log('hahah ')

ws.write('1111111\n')
ws.write('2222222\n')
ws.write('3333333\n')

//写入结束
ws.end()


