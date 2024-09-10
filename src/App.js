import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    if(count === 0)
      {
        setCount(count + 1);
      }
      else if(count *2  < 100000)
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
      <h2>
        Welcome to my App  
      </h2>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <MyTextBox/>
      </header>
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}
    style={{width: '150px', height: '50px', fontSize: '10px',margin:'20px auto'}}>
      Clicked {count} times;
    </button>
  );
}

function MyTextBox()
{
  return(
    <TextField label="文章を入力" variant='outlined' fullWidth style={{margin: '20px 0', width: '300px', height: ' 50px', margin: '20px auto'}}/>
  )
}

export default App;

