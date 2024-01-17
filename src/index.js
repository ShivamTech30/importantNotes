import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logics from "./Components/Logics/Logics"
import SystemDesigen from './Components/StstemDesign/SystemDesigen';
import Devops from './Components/Devops/Devops';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    {/* <Logics/> */}
    {/* <SystemDesigen/> */}
    {/* <Devops/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
