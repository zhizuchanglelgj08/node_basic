const fs = require('fs')
function mkDir(dir1, dir2,isCreateDir) {
    let url = dir1.join('/')
    if(dir2 === 'end' && !isCreateDir){
        fs.writeFile(url,function(err){
            if(err){
                console.log(err);
                return;
            }
        })
    }else{
        fs.mkdir(url, function (error) {
            if (error) {
                if(error.code == 'EEXIST'){
                    mk(dir1,dir2,isCreateDir)
                }else{
                    console.log(error)
                    return;
                }
            } else {
                mk(dir1,dir2,isCreateDir)
            }
        })
    }
}
function mk(dir1,dir2,isCreateDir ){
    if (dir2 !== 'end') {
        dir1.push(dir2.shift())
        if (dir2.length == 0) {
            mkDir(dir1, 'end')
        } else {
            mkDir(dir1, dir2,isCreateDir)
        }
    }
}

exports.ivy = function (dir,isCreateDir= true) {
    if (!dir) {
        console.log(new Error('dir is null'))
        return;
    }
    let container = dir.split('/');
    let dir1 = container.splice(0,2);
    let dir2 = container;
    mkDir(dir1,dir2,isCreateDir);
}