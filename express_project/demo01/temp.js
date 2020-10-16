let obj = {
    get : function(){
        console.log('i,m get')
        return 'get'
    },
    post : function(){
        console.log('i,m post')
    }
}
let a = 1
module.exports = obj;
exports.get = obj.get();
exports.post = obj.post();