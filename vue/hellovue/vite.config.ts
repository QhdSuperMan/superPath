import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import PrerenderSPAPlugin from "prerender-spa-plugin";
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
export default defineConfig({
  plugins: [
  vue(),
  // new PrerenderSPAPlugin({
  //   // 生成文件的路径，也可以与webpakc打包的一致。
  //   // 下面这句话非常重要！！！
  //   // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  //   staticDir: path.join(__dirname, 'dist'),
  //   // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
  //   routes: ['/', '/product', '/about'],
  //   // 这个很重要，如果没有配置这段，也不会进行预编译
  //   renderer: new Renderer({
  //     inject: {
  //       foo: 'bar'
  //     },
  //     headless: false,
  //     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
  //     renderAfterDocumentEvent: 'render-event'
  //   })
  // }),
  ],
  base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    // 9月更新
    assetsDir: "assets", //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    port: 3000, // 端口号
    host: "0.0.0.0",
    // proxy: {
    //   "/api": {
    //     target: "", // 后台接口
    //     changeOrigin: true,
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     // ws: true, //websocket支持
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
});