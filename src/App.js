import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    if(count === 0)
      {
        setCount(count + 1);
      }
      else if(count < 100000)
      {
        setCount(count * 2);
      }
      else
      {
        setCount(0);
      }
  }
  
  return (
    <div className = "App">
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </h1>
      </header>
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times;
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.<br />How do you do?
      </p>
    </>
  );
}

export default App;
