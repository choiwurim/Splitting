import React,{Suspense, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe=loadable(()=>import('./SplitMe'),{fallback:<div>loading...</div>});

function App(){
  const [visible, setvisible]=useState(false);
  const onClick=()=>{
    setvisible(true);
  };
  const onMouseOver=()=>{
    SplitMe.preload();
  } 
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React</p>
        {visible && <SplitMe/>}
      </header>
    </div>
  )
}


export default App;
