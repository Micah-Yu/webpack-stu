import { sum, mul } from './js/math.js'
import { component } from './js/component'
import('./css/index.css')
// 需要补全后缀，平时项目不用写后缀是因为配置了自动补全

const dom = component()
document.body.appendChild(dom)
console.log(sum(2,3))
console.log(mul(3,  4))
