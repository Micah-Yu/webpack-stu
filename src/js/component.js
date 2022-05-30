export function component() {
  const element = document.createElement('div')

  element.innerHTML = ['hello', 'webpack'].join(' ')
  element.className = 'content'

  const image = new Image()
  image.src = require('../images/下载.jpeg')
  image.style.height = 200 + 'px'
  image.style.width = 400 + 'px'
  element.appendChild(image)

  return element
}
