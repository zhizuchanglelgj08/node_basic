 class EventEmitter {
    constructor() {
        this.handler = {};
    }
    on(eventName, callback) {
        if (!this.handles) {
            this.handles = {};
        }
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        //追加触发时的内容
        this.handles[eventName].push(callback);
    }
    emit(eventName, ...arg) {
        if (this.handles[eventName]) {
            for (var i = 0; i < this.handles[eventName].length; i++) {
                this.handles[eventName][i](...arg);
            }
        }
    }
}

export default new EventEmitter();
// event.on('some_event', (num,c) => {
//     console.log('some_event 事件触发:' + num,'ss',c);
// });
// let num = 0
// event.on('some_event',function(){
//     console.log('我是你爹')
// });
// setInterval(() => {
//     event.emit('some_event', num++,123);
// }, 1000);