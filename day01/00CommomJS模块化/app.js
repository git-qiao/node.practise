
/*
* conmmonJS模块向外暴露对象的本质---
*     module.exports = exports = {}
* 两者共存时，只会向外部暴露出。module.exports所暴露的对象
* 因为：
*   1） module.exports --》 {} ； exports --》 {}
*   2） exports--> A{}   module.exports-->B{}
*   3)  默认对外暴露的就是 module.exports指向的对象
* */
let m1 = require('./module1')
console.log(m1);
m1.foo()
m1.bar()
// m1.fn()

let m2 = require('./module2')
console.log(m2)
m2.aa()
m2.bb()

let m3 = require('./module3')
console.log(m3)
m3.a()
m3.b()

let m4 = require('./module4')
console.log('------');
m4()
