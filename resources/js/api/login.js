import request from '../utils/request'
//前端第一次加密
let CryptoJS = require("crypto-js");
export function login(username, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      email:username,
      password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
