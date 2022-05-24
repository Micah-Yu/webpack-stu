# webpack系统学习

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

 