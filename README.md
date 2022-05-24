# webpack系统学习

## 环境

调试浏览器 Chrome 版本 101.0.4951.64

webpack: 5.72.1

webpack-cli: 4.9.2



## 模块化开发

### 原生模块化开发

`./src/js/math.js` 定义一个功能模块

```javascript
export const sum = (num1, num2) => {
  return num1 + num2
}

export const mul = (num1, num2) => {
  return num1 * num2
}

```



`./src/index.js` 引入功能模块

```javascript
import { sum, mul } from './js/math.js'
// 需要补全后缀，平时项目不用写后缀是因为配置了自动补全

console.log(sum(2,3))
console.log(mul(3,  4))

```

> 引入文件需要填写完整的后缀



`./index.html` 使用模块化

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<!--这里的需要以 module 的类型引入,且仅限在支持ES6模块化的浏览器中-->
<script src="src/index.js" type="module"></script>
</body>
</html>

```

> 需要以 module 的形式引入，且需要在支持ES6模块化的浏览器



这时候用浏览器打开 `index.html` 在控制台中可以看到输出结果

```
5
12
```

 

原生模块化的源码可以切换 [origin-module分支查看](https://github.com/Micah-Yu/webpack-stu/tree/origin-module)



### 模块化的支持

- **原生模块化的支持**
  添加文件 `./src/js/commonJs.js`，以 commonJS 方式导出

  ```javascript
  const func = () => {
    console.log('commonJs')
  }
  
  module.exports = {
    func
  }
  
  ```


  在 `index.js` 中使用commonJS 方式导入

  ```javascript
  import { sum, mul } from './js/math.js'
  // 需要补全后缀，平时项目不用写后缀是因为配置了自动补全
  const { func } = require('./js/commonJS.js')
  
  console.log(sum(2,3))
  console.log(mul(3,  4))
  func()
  
  ```


  运行结果：`Uncaught ReferenceError: require is not defined`

  >  浏览器原生不支持commonJS



- **webpack 对模块化的支持**

  1. 全局安装webpack: `npm install webpack webpack-cli -G`
  2. 使用webpack 打包 `webpack --entry ./src/index.js`
  3. 修改 `index.html` 中的 js 的引入 `<script src="dist/main.js"></script>`


  执行结果：

  ```
  5
  12
  commonJs
  ```


  webpack内部对多种模块化进行了支持，具体可以参考[官方文档](https://webpack.docschina.org/api/module-methods)