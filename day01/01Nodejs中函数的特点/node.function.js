//JS中打印外层函数体
/*function foo(a,b){
  console.log(arguments.callee.toString())
}
foo()*/




//打印出nodeJS中外层包裹的函数
console.log(arguments.callee.toString())
console.log(__filename);   //D:\PX\01lessons\04node\00node.practise\day01\01Nodejs中函数的特点\node.function.js
console.log(__dirname);    //D:\PX\01lessons\04node\00node.practise\day01\01Nodejs中函数的特点
/*
* function (exports, require, module, __filename, __dirname) { }
*
*   exports  用于暴露模块
*   require  用于引入模块
*   module   用于暴露模块
*   __filename 当前执行JS文件路径（绝对路径）
*   __dirname  当前执行JS文件所在文档路径（绝对路径）
*
* */


/*
* 外层包裹函数的作用
*   1.让我们可以直接使用Commonjs的模块语法
*   2.隐藏内部实现（作用域）
*   3.出于安全性考虑
* */