//api.js
import service from './request.js'
 
export function login(userName,password) {
    return service({
      url: '/user/getUserByName?userName='+userName+'&password='+password,
      method: 'get'
    })
  }

export function getUserList() {
  return service({
    url: '/user/getUserList',
    method: 'get'
  })
}