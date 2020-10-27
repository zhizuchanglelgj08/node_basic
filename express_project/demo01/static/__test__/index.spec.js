test('测试Hello World',()=>{
    const helloworld = require('../../app')
    console.log(helloworld)
    expect(helloworld)
        .toBe('你好')
})