const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath: '/aaa/',//基本路径
  assetsDir: 'static',//放置生成的静态资源 (js、css、img、fonts) 的目录
  productionSourceMap: false,//生产环境是否生成 sourceMap 文件
  devServer: {
    hot: true,//hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
    open: false, // 使用浏览器自动打开
    https: false,
    port: 8080,
    proxy: {
      // 匹配到/localApi开头时 替换成target指定的地址
      '/localApi': {
        // 本地
        target: process.env.VUE_APP_SRC,
        changeOrigin: true, // 开发环境才开启反向代理, 运行(生产)环境不开启
        pathRewrite: {
          // 把匹配到的/localApi这段开头 替换成 /
          '^/localApi': '/'
        }
      },
    }
  },
  chainWebpack: (config) => {
　//配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'));
  }
}