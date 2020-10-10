const path = require('path')
const fs = require('fs');
const { basename } = require('path');
module.exports = class testNow {
    genJestSource(sourcePath = path.resolve('./')){
        const testPath = `${sourcePath}/__test__`;
        if(!fs.existsSync(testPath)){
            fs.mkdirSync(testPath)
        }
        //遍历代码文件
        let list = fs.readdirSync(sourcePath);
        list
            //添加完整路径
            .map(v => `${sourcePath}/${v}`)
            //过滤文件
            .filter(v => fs.statSync(v).isFile())
            //排除测试代码
            .filter(v => v.indexOf('.spec') === -1)
            .map(v => this.genTestFile(v))
    }
    genTestFile(fileName){
        console.log('filename:' , fileName);
        const testFileName = this.getTestFileName(fileName);
        //判断此文件是否存在
        if(fs.existsSync(testFileName)){
            console.log(`该测试代码已存在:`,testFileName)
            return
        }

        const mod = require(fileName);
        let source
        if(typeof mod === 'object'){
            source = Object.keys(mod)
                .map(v => this.getTestSource(v,path.basename(fileName),true))
                .join('\n')
        }else if(typeof mod === 'function'){
            source = this.getTestSource(path.basename(fileName).replace('.js',''),basename)
        }
        fs.writeFileSync(testFileName,source)
    }
    /**
     * 
     * @param {*} methodName 
     * @param {*} classFile 
     * @param {Boolean} isClass false:不是对象
     */
    getTestSource(methodName,classFile,isClass = false){
        console.log('getTestSource',methodName)
        console.log('**************',classFile)
        return `
            test('${'TEST:' + methodName}',() => {
                const ${isClass ? ('{' + methodName + '}') : methodName} 
                    = require('${'../' + classFile}')
                const ret = ${methodName}()
            })
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