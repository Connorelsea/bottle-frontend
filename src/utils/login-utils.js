import cookie from 'react-cookie'

export function isAuth() {
  return cookie.load("accessToken") ? true : false
}

export function getAuthInfo() {
  return cookie.load("accessToken")
}

export function processLogin(res) {
  console.log(res)
  console.log("Cookie saved as " + res.accessToken)
  cookie.save("accessToken", res.accessToken)
}

export function processLogout(res) {
  cookie.remove("accessToken")
}
