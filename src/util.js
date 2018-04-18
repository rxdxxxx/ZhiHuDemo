import {camelizeKeys} from 'humps'

export async function request({url, async = true, params}, method = 'GET') {
  if (method === 'JSONP') {
    return new Promise((resolve, reject) => {
      const jsonpUrl =  `${url}&callback=JsonpCallBack`
      // 创建script标签，设置其属性
      const script = document.createElement('script')
      script.setAttribute('src', jsonpUrl)
      document.getElementsByTagName('head')[0].appendChild(script)
      
      window.JsonpCallBack = res => resolve(camelizeKeys(res.data))
    })
  }

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method, url, false)

    request.onreadystatechange = () => {    
      if (request.readyState == 4 && request.status == 200) {
        resolve(
          camelizeKeys(JSON.parse(request.responseText))
        )
      }
    }
    request.send()
  })
}

export function createNode(type, props) {
  const node = document.createElement(type)
  return Object.assign(node, props)
}

// 写一个柯里化的函数用来 添加node
export function appendChildren(parentNode) {
  return function appendChild() {
    if (arguments.length === 0) {
      return parentNode
    }
    parentNode.appendChild(arguments[0])
    return appendChild
  }
}
