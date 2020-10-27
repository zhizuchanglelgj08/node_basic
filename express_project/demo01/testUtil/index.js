const path = require('path');
module.exports = class TestUtil {
    /**
     * 生成方法名
     * @param {*} fileName  代码文件名
     */
    getTestFileName(fileName) {
        //目录名
        const dirName = path.dirname(fileName);
        //文件名
        const baseName = path.basename(fileName);
        //扩展名
        const extName = path.extname(fileName);
        //jest测试文件名
        const testName = baseName.replace(extName, '.spec' + extName)
        //组装
        return path.format({
            root: dirName + '/__test__/',
            base: testName
        })
    }
    /**
     * 
     * @param {*} methodName 
     * @param {*} classFile 
     * @param {*} isClass 
     */
    getTestSource(methodName,classFile,isClass = false){
        return `
            test('${'TEST '+ methodName }', ()=>{
                const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile});
                const ret = ${methodName}();
                //expect(ret)
                //    .toBe('test return')
            })
        `
    }
}