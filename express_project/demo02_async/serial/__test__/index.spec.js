const { EventEmitter } = require("events");
const { callback, promise, func, event } = require("..")
//jest 测试正常情况下无法执行异步方法。配合参数done来关闭
// test('callback', (Break) => {
//     callback()
//     setTimeout(Break, 1000)
// })

// test('promise', (Break) => {
//     promise()
//     setTimeout(Break, 1000)
// })

// test('generrator', (Break) => {
//     let a = func()
//     // console.log(a)
//     // console.log(a.next())
//     // console.log(a.next())
//     // console.log(a.next())
//     for (const [key, value] of func()) {
//         console.log(`${key}:$${value}`);
//     }
//     let obj = {
//         a: '1',
//         b: '2'
//     }
//     setTimeout(Break, 1000)
// })

// test('event', done => {
//     event();
//     setTimeout(done,1000);
// })
import eventEm from '../../js/EventEmitter'

test('event', done => {
    console.log(eventEm)
    setTimeout(done,1000);
})
