/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:33
 * @LastEditTime: 2022-02-24 13:18:56
 * @info: 描述
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyContext from './context/context'
ReactDOM.render(
  <MyContext.Provider value={{ id: 1 }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
