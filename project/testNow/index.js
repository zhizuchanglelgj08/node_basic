const path = require('path')
module.exports = class testNow {
    /**
     * 
     * @param {*} methodName 
     * @param {*} classFile 
     * @param {*} isClass 
     */
    getTestSource(methodName,classFile,isClass = false){
        console.log('getTestSource',methodName)
        return `
            test('${'TEST:' + methodName}',() => {
                const ${isClass ? '{' + methodName + '}' : methodName} 
                    = require('${'../' + classFile}')
            })
            const ret = ${methodName}()
            // expect(ret)
            //    .toBe('test return')
        `
    }
    /**
     * 生成测试文件名
     * @param {*} fileName 
     */
    getTestFileName(fileName) {
        //目录名
        const dirName = path.dirname(fileName)
        //文件名
        const baseName = path.basename(fileName)
        //扩展名
        const extName = path.extname(fileName)

        const testName = baseName.replace(extName, `.spec${extName}`)
        return path.format({
            root: dirName + '/__test__/',
            base: testName
        })
    }
}