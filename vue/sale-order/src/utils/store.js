import store from '@/store/index.js'
import { getUrlQuery } from '@/utils/index.js'


export function getToken () {
  let token = store.state.userInfo?.token
  if (!token && store.state.device === 'h5') {
    token = getUrlQuery('token')
  }
  return token
}

