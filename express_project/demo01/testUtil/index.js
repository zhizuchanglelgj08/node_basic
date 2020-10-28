const path = require('path');
const fs = require('fs');
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
    getTestSource(methodName, classFile, isClass = false) {
        return `
            test('${'TEST ' + methodName}', ()=>{
                const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile}');
                const ret = ${methodName}();
                //expect(ret)
                //    .toBe('test return')
            })
        `
    }

    /**
     * 
     * @param {*} sourcePath 
     */
    genJestSource(sourcePath = path.resolve('./')) {
        const testPath = `${sourcePath}/__test__`;
        if (!fs.existsSync(testPath)) {
            fs.mkdirSync(testPath);
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
    /**
     * 
     * @param {*} fileName 
     */
    genTestFile(fileName) {
        console.log('fileName:', fileName)
        const testFileName = this.getTestFileName(fileName);

        //判断此文件是否存在
        if (fs.existsSync(testFileName)) {
            console.log('存在')
            return
        }
        const mod = require(fileName);
        let source;
        if (typeof mod === 'object') {
            source = Object.keys(mod)
                .map(v => this.getTestSource(v, path.basename(fileName), true))
                .join('\n')
        } else if (typeof mod === 'function') {
            const baseName = path.basename(fileName)
            source = this.getTestSource(baseName.replace('.js',''),baseName)
        }
        fs.writeFileSync(testFileName,source)
    }
}