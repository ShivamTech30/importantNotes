import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logics from "./Components/Logics/Logics"
import SystemDesigen from './Components/StstemDesign/SystemDesigen';
import Devops from './Components/Devops/Devops';
import InfinitScool from './Components/infinitScroll/InfinitScool';
import PureComponent from './Components/PureComponent/PureComponent';
import DebounceComponent from './Components/DebounceComponent/DebounceComponent';
import Startingprocess from './Startingprocess/Startingprocess';
import MemoUse from './memoUse/MemoUse';
import ComponentA from './Components/testing/ComponentA';
import ObjectMenupulation from './ObjectMenupulation/ObjectMenupulation';
import TimeOffModal from './TimeOffModal';
import Table from './Table';
import FunctionHoisting from './FunctionHoisting/FunctionHoisting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>

    {/* <ObjectMenupulation/> */}
    {/* <ComponentA/> */}
    {/* <TimeOffModal/> */}
    {/* <Table/> */}
<FunctionHoisting/>
    {/* <App /> */}
    {/* <InfinitScool/> */}
    {/* <PureComponent/>. */}
    {/* <DebounceComponent/> */}
    {/* <Logics/> */}
    {/* <SystemDesigen/> */}
    {/* <Devops/> */}
    {/* <Startingprocess/> */}
    {/* <MemoUse/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
