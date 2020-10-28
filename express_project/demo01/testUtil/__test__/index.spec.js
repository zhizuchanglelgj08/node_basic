const fs = require('fs')
// test('测试文件名生成',()=>{
//     const src = new (require('../index'))();
//     const ret = src.getTestFileName('/abc/class.js');
//     console.log('getTestFileName:',ret);
//     expect(ret)
//         .toBe('/abc/__test__/class.spec.js')
// });

// test('测试文件生成',()=>{
//     const src = new (require('../index'))();
//     const ret = src.getTestSource('fun','class');
//     console.log('getTestSource:',ret);
//     expect(ret)
//         .toBe(`
//             test('TEST fun', ()=>{
//                 const fun = require('../class');
//                 const ret = fun();
//                 //expect(ret)
//                 //    .toBe('test return')
//             })
//         `)
// });

test('集成测试',()=>{
    //准备环境
    //删除测试文件夹
    fs.rmdirSync(__dirname + '/data/__test__',{
        recursive: true,
    })
    const src = new (require('../index'))();
    src.genJestSource(__dirname + '/data');
})