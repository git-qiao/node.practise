let fs = require('fs')
let ws = fs.createWriteStream('./music.mp3')
let rs = fs.createReadStream('./audio.mp3')



/*
 * 检测一下读取的开始和结束*/
rs.on('close',()=>{
  console.log('读取开始了')
})

rs.on('close',()=>{
  console.log('读取结束了')
  //读取结束后要关闭另一个写入
  ws.end()
})

//分批次的去读取，每一次读取<=64K的容量
rs.on('data',data=>{
  console.log(data)
  //写入新的文件
  ws.write(data)
})

/*
* 检测一下写入的开始和结束
* */
ws.on('open',()=>{
  console.log('写开始了')
})
ws.on('close',()=>{
  console.log('写结束了')
})



