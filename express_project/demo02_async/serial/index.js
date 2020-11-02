const logTime = (name) => {
    console.log(`Log...${name} ` + new Date().toLocaleDateString())
}

exports.callback = () => {
    setTimeout(() => {
        logTime('callback 1')
        setTimeout(() => {
            logTime('callback 2')
        }, 100)
    }, 100)
}
const promise = (name, delay = 100) => new Promise(resolve => {
    setTimeout(() => {
        logTime(name);
        resolve()
    }, delay)
})
exports.promise = () => {
    promise('Promise 1')
        .then(promise('Promise 2'))
        .then(promise('Promise 3'))
}

exports.func = function* () {
    console.log('one')
    yield '1';
    console.log('two');
    yield '2';
    console.log('three');
    return '3'
}

exports.event = async () => {
    const asyncFun = name => event => {
        setTimeout(() => {
            logTime(name);
            event.emit('end')
        });
        return event
    }

    const ary = [
        asyncFun('event 1'),
        asyncFun('event 2'),
        asyncFun('event 3')
    ]

    const { EventEmitter } = require('events');
    const event = new EventEmitter();
    console.log(EventEmitter)
    let i = 0;
    // event.on('end', () => i < ary.length && ary[i++](event))
    event.on('end', add)

    event.emit('end')//主动触发end，来激活add方法
    function add(){
        return i < ary.length && ary[i++](event)
    }
}


