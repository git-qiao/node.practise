/**
 * Created by Joe on 2019/1/21.
 */
//引入模块1
let m1 = require('./a')
console.log(m1);

//引入模块2
let m2 = require('./b')
console.log(m2);
/*let {a,b} = require('./a')
console.log(a,b)*/


//引入模块3
let m3 = require('./c')
console.log(m3)
m3.b()
let {a,b} = require('./c')
console.log(a,b)
b()
