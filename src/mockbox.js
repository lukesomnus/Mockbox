const koa = require('koa');
const cors = require('koa-cors');
const router = require('koa-router')();
const app = new koa();
const bodyParser = require('koa-bodyparser');
const _ = require('lodash');
const util = require('./lib/util');

const Mockbox = function (config) {
    this.mockDataArr = [];
    this.config = _.extend({}, this.config, config);
};

// default config
Mockbox.prototype.config = {
    base: '',
    port: 3000
}
Mockbox.prototype = {
    // 添加模拟数据
    add: function (mockdata) {
        this.mockDataArr.push(mockdata);
    },
    // 测试 hello
    hello: function () {

        this.mockDataArr.push({
            url: '/hello',
            method: 'get',
            success: {
                msg: 'hello'
            }
        });
    },
    get: function (config) {
        const defaultConfig = {
            url: '/',
            method: 'get'
        };
        const _opt = _.extend({}, defaultConfig, config);
        this.add(_opt);
        return this;
    },
    post: function (config) {
        const defaultConfig = {
            url: '/',
            method: 'post'
        };
        const _opt = _.extend({}, defaultConfig, config);
        this.add(_opt);
    },
    run: function (port) {
        if (_.isNumber(port)) {
            _init(this.mockDataArr, port);
        } else {
            _init(this.mockDataArr, this.config.port);
        }

    }
};

function _init(mockDataArr, port) {
    mockDataArr.forEach(elem => {

        router[elem.method](elem.url, ctx => {

            let queryArr = null; //请求参数
            const requireParams = elem.require; //配置的必须参数
            const httpMethod = elem.method;

            let flag = true;

            if (requireParams && requireParams.length > 0) {

                if (httpMethod === 'get' || httpMethod === 'GET') {

                    queryArr = ctx.query;
                }

                if (httpMethod === 'post' || httpMethod === 'POST') {

                    queryArr = ctx.request.body;
                }

                let errorMsg = '';

                requireParams.forEach((param) => {

                    if (util.isEmpty(queryArr[param])) {

                        console.error(param + '为必传参数');

                        errorMsg += param + ','

                        flag = false;
                    }
                    ctx.body = {
                        mockErrMsg: errorMsg + '为必传参数'
                    };
                });
            }
            // 参数验证通过
            if (flag) {
                ctx.body = elem.data;
            }
        });
    });

    // 路由
    app
        .use(router.routes())
        .use(router.allowedMethods());

    // 启动服务
    app.listen(port);
}

module.exports = Mockbox