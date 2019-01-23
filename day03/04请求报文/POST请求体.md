## POST请求报文
    POST http://localhost:2000/test HTTP/1.1
    Host: localhost:2000
    Connection: keep-alive
    Content-Length: 22
    Cache-Control: max-age=0
    Origin: http://localhost:63342
    Upgrade-Insecure-Requests: 1
    Content-Type: application/x-www-form-urlencoded
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Referer: http://localhost:63342/00node.practise/day03/04%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87/test.html?_ijt=smdgk9g3q1ti0qp7kd2c5pgn2f
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9
    Cookie: Webstorm-d8f60c9=140e798a-1f96-4203-85e5-e64644af4b83

    name=peiqi&age=12

## 请求行首
   POST http://localhost:2000/test HTTP/1.1
        --方式 协议：//ip:端口/路由   协议版本

## 请求头
    Host: localhost:2000
        --主机地址
    Connection: keep-alive
        --保持长连接
    Content-Length: 22
        --内容大小
    Cache-Control: max-age=0
        --不走缓存（http 1.1提出的--------优先级别高）
    Origin: http://localhost:63342
        --请求的来源（只精确到端口号）
    Upgrade-Insecure-Requests: 1
        --告诉服务器，浏览器可以使用http 1.1协议
    Content-Type: application/x-www-form-urlencoded
        --告诉服务器该请求是由一个form表单发出的，并且请求参数以urlencoded这种形式传递的
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
        --用户代理，最开始是用来识别用户使用的是哪一个品牌的浏览器，后期不行了
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
        --告诉服务器，浏览器能接受的文件类型，q代表优先级
    Referer: http://localhost:63342/00node.practise/day03/04%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87/test.html?_ijt=smdgk9g3q1ti0qp7kd2c5pgn2f
        --请求的来源（完整的请求地址）1.防盗链 2.广告计费
    Accept-Encoding: gzip, deflate, br
        --告诉服务器，浏览器能接受的压缩格式
    Accept-Language: zh-CN,zh;q=0.9
        --告诉服务器,浏览器能接受语言
    Cookie: Webstorm-d8f60c9=140e798a-1f96-4203-85e5-e64644af4b83
        --webstrom自带缓存

## 空行


## 请求体
    name=peiqi&age=12(urlencoded这种形式传递的)