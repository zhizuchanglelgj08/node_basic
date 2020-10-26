// //引入http模块
// const http = require('http');
// //引入url模块
// const url = require('url');
// function server() {
//     var count = 0
//     /**
//      * request  获取url传过来的信息
//      * response 给浏览器的响应信息
//      */
//     http
//         //创建一个服务
//         .createServer(function (request, response) {
//             //设置响应头,状态吗是 200，文件类型是 html，字符集是 utf-8
//             response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//             //表示给我们页面上输出一句话并结束响应,缩写 response.end('this is nodejs')
//             if (request.url != '/favicon.ico') {
//                 response.write('this is nodejs,你好')
//                 var api = request.url
//                 var value = url.parse(api, true).query
//                 response.write(JSON.stringify(value))
//                 count++;
//             }
//             response.end()
//         })
//         //监听端口
//         .listen(8081);
//     console.log('Server running at http://127.0.0.1:8081/');

// }
// exports.start = server



const f = require('./static/js/function')
const http = require('http');
const fs = require('fs')
const path = require('path')
http.createServer(function (request, response) {
    //http://127.0.0.1:3000/index.html
    //http://127.0.0.1:3000/login.html
    //1.获取地址
    
    console.log(request.url)
    let pathname = request.url;
    let extname = path.extname(pathname)
    if(pathname != '/favicon.ico'){
        fs.readFile('./static'+pathname,async (err,data)=>{
            if(err){
                response.writeHead(404, {'Content-Type': "text/html;chartset='utf-8'"});
                fs.readFile('./static/404.html',(err,res)=>{
                    if(err){
                        return
                    }else{
                        response.end(res)
                    }
                });
                return
            }else{
                let mime = await f.getFileMime(extname)
                response.writeHead(200, {'Content-Type': `${mime};chartset='utf-8'`});
                response.end(data);
            }
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');