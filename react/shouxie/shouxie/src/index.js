/*
 * @Author: your name
 * @Date: 2021-06-02 20:27:38
 * @LastEditTime: 2021-06-02 21:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shouxie\src\index.js
 */
import React from './self/react.js';
// import ReactDOM from 'react';
let ReactDOM = React;

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


let element = <div >学习react
  <h1>学习,<span style='color:red;'>55</span></h1>
</div>
ReactDOM.render(element, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
