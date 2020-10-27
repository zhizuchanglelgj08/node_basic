
const fs = require('fs')
exports.getFileMime = function (extname) {
    console.log(extname)
    let syn = JSON.parse(fs.readFileSync('./data/mime.json').toString())[extname]
    // console.log('syn',syn)
    return syn
}