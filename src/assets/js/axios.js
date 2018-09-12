import axios from 'axios';

let http = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === "development" ? '/api' : ""
})

const post = (url, data, config = {}) => {
  return http.post(url, data, config)
}

const put = (url, data, config = {}) => {
  return http.put(url, data, config)
}

const get = (url, params, config = {}) => {
  console.log("url:", url);
  return http.get(url, {
    params: params,
    ...config
  })
}

const deleteMethod = (url, config = {}) => {
  return http({
    url: url,
    method: 'delete',
    ...config
  })
}

export default {
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $reqGet: {
        value: get
      },
      $reqPost: {
        value: post
      },
      $reqPut: {
        value: put
      },
      $reqDel: {
        value: deleteMethod
      },
    })
  }
}
