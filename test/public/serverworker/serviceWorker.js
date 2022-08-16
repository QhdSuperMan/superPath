/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
var version = 'v1.0011'

this.addEventListener('install', function (event) {
  self.skipWaiting()
  /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
  event.waitUntil(
    /* 创建一个名叫V1的缓存版本 */
    caches.open(version).then(function (cache) {
      /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
      return cache.addAll([
        './static/a.jpg'
      ]);
    })
  );
});
this.addEventListener('activate', function (event) {
  /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
  console.log('激活了1111111')
});
/* 注册fetch事件，拦截全站的请求 */
this.addEventListener('fetch', function (event) {
  // console.log('fetch', caches.keys(), event.request.url)
  console.log(caches.match(event.request), event.request)
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});