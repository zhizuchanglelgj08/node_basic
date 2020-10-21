const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
let ivy = Object.create(null)
ivy.mkdir = function (dir,isCreateDir= true) {
    if (!dir) {
        console.log(new Error('dir is null'))
        return;
    }
    let container = dir.split('/');
    let dir1 = container.splice(0,2);
    let dir2 = container;
    ivy_toMk()
    function ivy_toMk(){
        if(dir2.length == 0){
            dir2 = false
        }
        console.log(dir1,dir2)
        let mkUrl = dir1.join('/');
        if(!dir2 && !isCreateDir){//file
            fs.writeFile(url,'',(err)=>{
                if(err){
                    console.log(err)
                    return
                }
            })
        }else{
            fs.mkdir(mkUrl,(err)=>{
                if(err){
                    if(err.code =='EEXIST'){
                        dir2 && dir1.push(dir2.shift())
                        dir2 && ivy_toMk();
                    }else{
                        console.log(err)
                        return
                    }
                }else{
                    dir2 && dir1.push(dir2.shift())
                    dir2 && ivy_toMk();
                }
            })
        }
    }
}
ivy.readdir = function(dirname){
    console.log(dirname)
    let array = [];
    let ivy_toRead = function (dirname){
        // let url = dir1.join('/');
        let nowV ;
        let res = fs.readdir(dirname,(err,e)=>{
            if(err){
                console.log(err);
                return
            }
            array = array.concat(e)
        })
        console.log('fs',array)
        return array
    }
    ivy_toRead(dirname)
    
}
exports.ivy = ivy;