# MockBox
基于koa开发的模拟数据请求服务器。

## 特点
- 可模拟GET，POST，PUT，DELETE求情
- 可定制返回数据
- 可校验请求参数

## 安装
` npm install`

## 使用方法

### Hello
```
  const MockBox = require('./index.js');
  const mb = new MockBox();
  mb.hello();
  mb.run();  //default port 3000
```
访问http://localhost:3000/hello，将返回数据{msg:'hello'};
### 配置
```
 const mb = new MockBox({
     base:'/test',  // 请求基地址
     port:3000     //访问端口
 });

```
### 方法
#### MockBox.add()
添加模拟数据，数据格式如下
```
     const config ={
        url: '/test',  //请求地址
        method:'get',   //默认是get
        require:[],  //必需参数，eg:['id','name']
        returnData: {
            msg:'hello MockBox!'
        }  //返回的数据
    };
     mb.add(config);
     mb.run(3000);
```
### Mock.get()

模拟get请求
```
     const config ={
        url: '/test',  //请求地址
        require:[],  //必需参数，eg:['id','name']
        returnData: {
            msg:'hello MockBox!'
        }  //返回的数据
    };
     mb.get(config);
```
### Mock.post()

模拟post请求
```
     const config ={
        url: '/test',  //请求地址
        require:[],  //必需参数，eg:['id','name']
        returnData: {
            msg:'hello MockBox!'
        }  //返回的数据
    };
     mb.post(config);
```
### Mock.run(port)
启动mock服务器，port为端口号。