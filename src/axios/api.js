//api.js
import service from './request.js'
 
export function login(userId) {
    return service({
      url: '/user/getUserById?userId='+userId,
      method: 'get'
    })
  }