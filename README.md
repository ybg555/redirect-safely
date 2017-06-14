redirect-safely
==========================
[![Travis](https://img.shields.io/travis/ybg555/redirect-safely.svg)](https://travis-ci.org/ybg555/redirect-safely)
[![npm](https://img.shields.io/npm/dm/redirect-safely.svg)](https://www.npmjs.com/package/redirect-safely)
[![npm](https://img.shields.io/npm/v/redirect-safely.svg)](https://www.npmjs.com/package/redirect-safely)
[![node](https://img.shields.io/node/v/redirect-safely.svg)](https://www.npmjs.com/package/redirect-safely)


服务端未对传入的跳转 url 变量进行检查和控制，可能导致可恶意构造任意一个恶意地址，诱导用户跳转到恶意网站。判断重定向的域名是否在白名单列表中，封堵url钓鱼；

## Installation

```shell
npm i --save redirect-safely
```        

## Usages

```js
const redirectByWhiteList = require('redirect-safely');

const href = this.href; // 重定向的域名
const whiteList = [ '.baidu.com', 'alibaba-inc.com', '.qq.com' ]; // 白名单列表，自己配置和获取，格式为通域；
const result = redirectByWhiteList(href, whiteList);

if(result) {
  this.redirect(href); // 允许重定向
} else {
  // 打错误日志+自定义逻辑
}
```

## Issues

Submit the [issues](https://github.com/ybg555/redirect-safely/issues) if you find any bug or have any suggestion.

## Contribution

Fork the [repository](https://github.com/ybg555/redirect-safely/tree/master) and submit pull requests.
	
## Release Notes

[CHANGELOG](https://github.com/ybg555/redirect-safely/blob/master/CHANGELOG.md)
	
## License

[![npm](https://img.shields.io/npm/l/redirect-safely.svg)](https://github.com/ybg555/redirect-safely/blob/master/LICENSE.md)

