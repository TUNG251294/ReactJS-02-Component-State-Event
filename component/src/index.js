import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestApp from './app/TestApp';
import reportWebVitals from './reportWebVitals';
import StateApp from './app/StateApp';
import SetStateApp from './app/SetStateApp';
import ClickButtonApp from './app/ClickButtonApp';
import ChangeComponentColorApp from './app/ChangeComponentColorApp';
import AlertUnmountApp from './app/AlertUnmountApp';
import ToggleApp from './app/ToggleApp';
import LoginApp from './app/LoginApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TestApp /> */}
    {/* <StateApp /> */}
    {/* <SetStateApp /> */}
    {/* <ClickButtonApp /> */}
    {/* <ChangeComponentColorApp /> */}
    {/* <ToggleApp /> */}
    <LoginApp/>
  </React.StrictMode>
);

// React.StrictMode là một thành phần của React giúp tăng cường kiểm tra và cảnh báo

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
