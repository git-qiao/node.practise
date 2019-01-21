/**
 * Created by Joe on 2019/1/19.
 */
/*
* 1.什么是包：
*   一个工程，一个项目就可以称为一个包，但是要符合包的格式
* 2.npm包的结构：
*   package.json   描述文件
*   bin   可执行二进制文件
*   lib   js代码
*   doc   文档
*   test  单元测试
*
*   npm初始化命令： npm init
*   包名要求： 不能有中文，不能大写字母
*
*  3.npm与Node关系
*   安装node后会自动安装一个npm包管理工具
*
*   4.npm常用命令
*     1）搜索：
*         通过命令搜索 -- npm search XX
*         通过网站搜索
*
*     2）安装
*         //下载XX到当前工程，并将该包写入包的描述文件
*         a.  npm install XX --save/-S    添加到生产依赖
*             npm install XX  //不写默认
*         b.  npm install XX --save-dev / -D  添加到开发依赖
*
*         c.  npm install/i  安装package.json中所有的包到本地
*
*         d.  npm i XX@版本号
*
*     3）移除
*       npm remove XX
*       npm uninstall XX
*
*     4）其它常用
*     npm view XX versions
*     npm view XX version
*     npm ls XX      查看当前工程安装的xxx包版本信息
*     npm audit fix ：修复一些内容
*
*     */
/*
  版本号
*     "^1.x.x"   锁定大版本，以后安装包，保证 1.x.x
*     "~1.12.x"  锁定小版本，以后安装包，保证 1.12.x
*     "1.12.4"   锁定完整版本
*
* */
