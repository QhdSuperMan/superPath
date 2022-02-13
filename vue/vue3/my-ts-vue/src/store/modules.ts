import user from './modules/user/index'
export const modules = {
  user,
  wechet: {
    namespaced: true,
    getters: {
      test: () => {
        return 111
      }
    }
  }
}

