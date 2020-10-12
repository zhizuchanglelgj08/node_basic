//引入http模块
const http = require('http');
//引入url模块
const url = require('url');

var count = 0
/**
 * request  获取url传过来的信息
 * response 给浏览器的响应信息
 */
http
    //创建一个服务
    .createServer(function (request, response) {
        //设置响应头,状态吗是 200，文件类型是 html，字符集是 utf-8
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        //表示给我们页面上输出一句话并结束响应,缩写 response.end('this is nodejs')
        if(request.url != '/favicon.ico'){
            response.write('this is nodejs,你好')
            var api = request.url
            var value = url.parse(api,true).query
            response.write(JSON.stringify(value))
            count ++;
            console.log(count,request.url)
        }
        response.end()
    })
    //监听端口
    .listen(8081);

console.log('Server running at http://127.0.0.1:8081/');