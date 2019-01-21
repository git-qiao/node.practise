/**
 * Created by Joe on 2019/1/21.
 */
/*
*  流式文件读取：
*   fs.createReadStream(path[, options])
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
*                 --end：结束的位置（一般不用），默认：Infinity
*                 --highWaterMark:每一次读取文件时候的大小，默认为 64 * 1024
*           --callback：回调函数
*
* */
/*
* 流式文件监测开始和结束的事件：
*   1.open
*   2.close
* 读取文件的事件
*   data
*
* */
let fs = require('fs')
let rs = fs.createReadStream('./two.txt')
let ws = fs.createWriteStream('./two2.txt')

rs.on('open',()=>{
  console.log('r试了了');
})
rs.on('close',()=>{
  console.log('r结束了');
  //读写完毕  关闭写入
  ws.end()
})
ws.on('open',()=>{
  console.log('w试了了');
})
ws.on('close',()=>{
  console.log('w结束了');

})


//读取数据的事件
rs.on('data',data=>{
  console.log(data.toString())

  ws.write(data)

})



