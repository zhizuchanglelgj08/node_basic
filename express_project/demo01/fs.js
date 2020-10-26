/**
 * 1. stat 检测是文件还是目录
 * 2. mkdir 创建目录
 * 3. writeFile 创建写入文件
 * 4. appendFile 追加文件
 * 5. readFile 读取文件
 * 6. readdir 读取目录
 * 7. rename 重命名，移动文件
 * 8. rmdir 删除目录
 * 9. unlink 删除文件
 */

const fs = require('fs');
const { dir } = require('console');
exports.fileGo = function () {
    //1. stat 检测是文件还是目录
    fs.stat('./html', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('是不是文件？', data.isFile() ? '文件' : '目录')
    })
    //2. mkdir 创建目录
    fs.mkdir('./css', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('创建目录成功')
    })
    //3. writeFile 创建写入文件，会覆盖上一次内容
    fs.writeFile('./html/index.html', '你好nodejs', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('创建写入成功')
    })
    //4. appendFile 追加文件，在上一次内容上追加内容
    fs.appendFile('./css/index.css', 'h3{font-size:13px}', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('创建写入成功')
    })
    //5. readFile 读取文件
    fs.readFile('./css/index.css', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data)
        console.log(data.toString())
    })
    //6. readdir 读取目录
    fs.readdir('../../', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('readdir', data)
    })

    //7. rename 重命名,可以用来移动文件
    fs.rename('./css/index.css', './css/css.css', (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('重命名成功')
    })
    //8. rmdir 删除目录，目录内有文件时没法删除，需配合unlinl使用
    //9. unlink 删除文件
 /**
  * 1. createReadStream 读取文件流
  * 2. createWriteStream 写入文件流
  */
    let rs = fs.createReadStream('./A');
    let ws = fs.createWriteStream('./B');
    rs.pipe(ws)
}


