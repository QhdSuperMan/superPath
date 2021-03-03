// import axios from 'axios'
import QS from 'qs'
import router from '../router/index'
import axios from './server'
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post(url, params, config) {
  var sendConfig = Object.assign({}, {
    // timeout: 80000,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // 'xggadminsid': localStorage.getItem('xggadminsid')
    }
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  }, config);
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params) || {}, sendConfig)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        // console.log('接口提示', err.data.msg)
        reject(err.data)
      })
  })
}
export function postImg(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params) || {}, {
      timeout: 16000,
      headers: {
        "Content-Type": "multipart/form-data"
        // 'xggadminsid': localStorage.getItem('xggadminsid')
      }
      // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    })
      .then(res => {
        resolve(res.data)
        if (res.data.code && res.data.code == -204) {
          this.$message.error(d.msg);
        }

      })
      .catch(err => {
        // alert('数据异常！')
        console.log('接口提示', err.data.msg)
        reject(err.data)
      })
  })
}

export function exportMethod(data) {
  axios({
    method: data.method,
    url: data.url,
    data: data.data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    const link = document.createElement('a')
    let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
    link.style.display = 'none'
    link.href = URL.createObjectURL(blob)

    link.download = data.fileName + '.xls' //下载的文件名  注意：加.xls是兼容火狐浏览器
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }).catch(error => {
    console.log(error)
  })
}
