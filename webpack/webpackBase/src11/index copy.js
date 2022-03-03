/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:41
 * @LastEditTime: 2022-02-09 14:45:13
 * @info: 描述
 */
// import lodash from 'lodash';
// import printMe from './print.js';
// import 'babel-polyfill';
// import './style.css'
// import imgUrl from './icon.png'
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }

// function component () {
//   const element = document.createElement('div');
//   const button = document.createElement('button');
//   const br = document.createElement('br');
//   const img = document.createElement('img');
//   img.src = imgUrl
//   button.innerHTML = 'Click me and check the console!';
//   element.appendChild(br);
//   element.appendChild(button);
//   element.appendChild(img);
//   console.log(img)
//   // element.innerHTML = join(['Hello', 'webpack'], ' ');
//   // Note that because a network request is involved, some indication
//   // of loading would need to be shown in a production-level site/app.
//   // button.onclick = e => import('./print').then(module => {
//   //   const print = module.default;
//   //   print();
//   // });
//   return element
// }

// document.body.appendChild(component());

// // if (module.hot) { HMR
// //   module.hot.accept('./print.js', function () {
// //     console.log('Accepting the updated printMe module!1111111111111111');
// //     document.body.removeChild(element);
// //     element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
// //     document.body.appendChild(element);
// //     printMe();
// //   })
// // }


// // fetch('https://jsonplaceholder.typicode.com/users')
// //   .then((response) => response.json())
// //   .then((json) => {
// //     console.log(
// //       "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
// //     );
// //     console.log(json);
// //   })
// //   .catch((error) =>
// //     console.error('Something went wrong when fetching this data: ', error)
// //   );