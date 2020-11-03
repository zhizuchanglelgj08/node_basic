import em from './js/EventEmitter.js'
(function(){
    em.on('hello',function(name){
        console.log(name)
    })
    em.emit('hello','zhang三年')
})()