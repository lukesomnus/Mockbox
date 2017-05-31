const Mockbox = require('../index.js');

const mb = new Mockbox();
mb
    .get({
        url: '/test',
        require:['id'],
        data: {
            resultCode: 0,
            errmsg: null,
            data: {
                id: 1,
                text: 'hello, mockbox!',
                done: false
            }
        }
    })
    .post({
        url: '/test',
        data: {
            resultCode: 0,
            errmsg: null,
            data: {
                id: 1,
                text: 'hello, mockbox!',
                done: false
            }
        }
    })

mb.run(3002);