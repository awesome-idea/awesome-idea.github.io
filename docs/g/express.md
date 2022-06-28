# Express 源码分析

## 01

说来惭愧，自己从 18 年刚刚参加工作时接触的第一个 Node.js 框架就是 Express，后面慢慢用了 Koa2，Egg.js，Nest.js，但是基本上都停留在使用层面，从来没有想要过探索源码。大部分情况都是 CRUD，慢慢工作了 4 年了，确实是感觉，还这样下去不行。所以还是想着慢慢的学习源码。慢慢对自己 Node 基础缺失部分进行查漏补缺。

## 02

首先把 [Express](https://github.com/expressjs/express) clone 一下

```shell
git clone https://github.com/expressjs/express
```

在阅读源码之前最好是对代码有一个整体的认识会好一点。知道整体的结构会有利于我们从整理进行书写。

```shell
.
├── application.js
├── express.js
├── middleware
│   ├── init.js
│   └── query.js
├── request.js
├── response.js
├── router
│   ├── index.js
│   ├── layer.js
│   └── route.js
├── utils.js
└── view.js

2 directories, 11 files
```

我们主要关注的是 lib 文件夹下的文件，这里面基本上就是 express 的所有最核心的代码了。

## 03

其实第一时间看到这源码的时候。

卧槽，这是不是有点太简洁了，属实有点不可思议，毕竟我记得我最开始看 Spring 源码的时候，那大大的源码，属实有点难理解。「**现在也没理解到**」

**上面是我的第一直觉，就是觉得还是比较简单的。**:smiling_imp::smiling_imp::smiling_imp:

> 后面事实证明，我自己还是太年轻了。

## 04

一般来说开一个开源项目，刚开始的时候可以先看一下它的 pacakge.json 这样可以最快速的了解项目有哪些依赖

```json
{
  "name": "express",
  "version": "4.18.1",
  "dependencies": {
    "accepts": "~1.3.8",
    "array-flatten": "1.1.1",
    "body-parser": "1.20.0",
    "content-disposition": "0.5.4",
    "content-type": "~1.0.4",
    "cookie": "0.5.0",
    "cookie-signature": "1.0.6",
    "debug": "2.6.9",
    "depd": "2.0.0",
    "encodeurl": "~1.0.2",
    "escape-html": "~1.0.3",
    "etag": "~1.8.1",
    "finalhandler": "1.2.0",
    "fresh": "0.5.2",
    "http-errors": "2.0.0",
    "merge-descriptors": "1.0.1",
    "methods": "~1.1.2",
    "on-finished": "2.4.1",
    "parseurl": "~1.3.3",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~2.0.7",
    "qs": "6.10.3",
    "range-parser": "~1.2.1",
    "safe-buffer": "5.2.1",
    "send": "0.18.0",
    "serve-static": "1.15.0",
    "setprototypeof": "1.2.0",
    "statuses": "2.0.1",
    "type-is": "~1.6.18",
    "utils-merge": "1.0.1",
    "vary": "~1.1.2"
  },
  "devDependencies": {
    "after": "0.8.2",
    "connect-redis": "3.4.2",
    "cookie-parser": "1.4.6",
    "cookie-session": "2.0.0",
    "ejs": "3.1.8",
    "eslint": "7.32.0",
    "express-session": "1.17.2",
    "hbs": "4.2.0",
    "marked": "0.7.0",
    "method-override": "3.0.0",
    "mocha": "10.0.0",
    "morgan": "1.10.0",
    "multiparty": "4.2.3",
    "nyc": "15.1.0",
    "pbkdf2-password": "1.2.1",
    "supertest": "6.2.3",
    "vhost": "~3.0.2"
  },
  "engines": {
    "node": ">= 0.10.0"
  }
}
```

先把依赖放在上面，后面遇到了在详细看。

```js
// index.js

'use strict'

module.exports = require('./lib/express')
```

从外层的 index.js 可以看出，后面入口为 lib 下的 express.js 文件为主要入口
