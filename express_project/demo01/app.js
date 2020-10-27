const router = require('./ivy_module/router')
const http = require('http');
let {go} = router
http.createServer(function (request, response) {
    go(request,response);
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

