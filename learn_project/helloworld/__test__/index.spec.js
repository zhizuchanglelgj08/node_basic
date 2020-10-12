test('测试Hello World',()=>{
    const helloworld = require('../index')
    console.log('test:',helloworld)
    expect(helloworld)
        .toBe('hello world')
})
//jest project --watch 随时监听测试文件的变化