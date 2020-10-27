const fs = require('fs')
const path = require('path')
const f = require('./function')
module.exports = function (req, res) {
    let pathname = req.url;
    let extname = path.extname(pathname)
    if (pathname != '/favicon.ico') {
        if (!extname) {
            hashUrl(pathname,req,res)
        } else {
            //静态路由加载
            let data = fs.readFileSync('./static' + pathname);
            let mime = f.getFileMime(extname)
            console.log(mime)
            res.writeHead(200, { 'Content-Type': `${mime};chartset='utf-8'` });
            res.end(data);
        }

    }
}
function hashUrl(pathname, req, res) {
    let data = fs.readFileSync('./static' + pathname + '.html')
    res.writeHead(200, { 'Content-Type': `text/html;chartset='utf-8'` });
    res.end(data);
}