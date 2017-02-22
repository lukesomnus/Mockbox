const MockBox = require('./index.js');

const mb = new MockBox();
mb.hello();
mb.get({
    url: '/test',
    require:['uid','actid','answers'],
    data: {
        resultCode: 0,
        errmsg: null,
        returnData: {
            id: 1,
            desc: '选择下期您想期待的嘉宾',
            options: [{
                    optionId: 1,
                    text: '周杰伦'
                },
                {
                    optionId: 2,
                    text: '张惠妹'
                },
                {
                    optionId: 3,
                    text: '赵雷'
                },
                {
                    optionId: 4,
                    text: '成龙'
                }
            ]
        }
    }
})
mb.run(3002);