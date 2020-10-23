const server = require('./server')
// const temp = require('./temp');
const fs = require('../mySart/mkDir')
// server.start();
// fs.fileGo();
// fs.test();
// fs.createDir('./a/b')
// fs.ivy('../2/3/1/')
let a ;
fs.ivy.readdir('./',function (obj) {
    console.log(obj)
})
// let wait = new Promise((resolve,reject)=>{
//     resolve(123);
// });
// console.log(wait.then(function(r){console.log(r)}))