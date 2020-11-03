const http = require('http');

// function updateTime() {
//     setInterval(() => {
//         return this.time = new Date().toUTCString()
//     }, 1000);
//     return this, this.time
// }

// http
//     .createServer((req, res) => {
//         const { url } = req;
//         if ('/' === url) {
//             res.end(`
//                 <html>
//                     Html Update Time ${updateTime}
//                     <scirpt src='main.js></scirpt>
//                 </html>
//             `)
//         }else if('/main.js' === url){
//             const content = `document.writeln('<br>JS Update Time: ${updateTime()}')`;
//             res.statusCode = 200;
//             res.end(content)
//         }else if('/favicon.ico' === url){
//             res.end()
//         }
//     })
//     .listen(3000, () => {
//         console.log('Http Cache Test Run at ' + 3000)
//     })
import em from './js/EventEmitter.mjs'
console.log(em)