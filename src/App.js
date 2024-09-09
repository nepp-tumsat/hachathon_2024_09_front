import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className = "App">
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
          WelCome to my App
          <MyButton/>
          <AboutPage/>
        </h1>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
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
