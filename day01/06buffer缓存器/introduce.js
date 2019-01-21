/**
 * Created by Joe on 2019/1/21.
 */
/*
* buffer:  一个数组类似的对象  以二进制的形式存储数据
*   1.buffer效率高，读取存储很快，直接对计算机的内存进行操作
*   2.大小一旦确定了，不可修改
*   3.每个元素大小为1字节
*   4.buffer是node中的非常核心模块，不需要引入即可使用
*
* 进制：
*   1.十六进制：  00----ff
*   2.十进制：    0---255
*   3.二进制：    00000000------11111111
*
*
*   1字节（byte） = 8位（bit）
* */
//1.将字符串 保存到 Buffer中
let str = 'aaaaaaa'
let buffer = Buffer.from(str)
console.log(buffer,str.length);

//2.新建一个Buffer对象（废除了，效率低，不安全）
let buf = new Buffer(10)
console.log(buf);

//3.新建一个buffer对象（效率少低）
let buf2 = Buffer.alloc(10)
console.log(buf2,'-----');

//4.新建一个buffer对象（效率高，不安全）
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3);
console.log(buf3.toString());
