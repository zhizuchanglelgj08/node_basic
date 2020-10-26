exports.getMime = function(extname){
    switch(extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascirpt';
        default:
            return 'text/html';
    }
}
const fs = require('fs')
exports.getFileMime = function (extname) {
    let syn = fs.readFileSync('./static/data/mime.json')
    // console.log('syn',syn)
    return new Promise((resolve,reject)=>{
        fs.readFile('./static/data/mime.json',(err,data)=>{
            if(err){
                console.log(err);
                reject(err)
                return;
            }
            resolve(JSON.parse(data.toString())[extname])
        })
    })
}