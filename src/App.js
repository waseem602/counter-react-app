import React, {useState} from 'react';
import './App.css';
import {Message} from './Message';


function App() {
  let [count, setCount] = useState(0);
  let [time, setTime]=useState(true);
  
  return (
    <div className={time ? 'dayLight' : 'night'}>
      <h2>Good {time ? 'Morning':'Night'}</h2>
    <Message counter={count}/>
    <br />
    
      <button onClick={
        ()=>setCount(++count)
        }>
          Update Counter
      </button>
      <button onClick={()=>setTime(!time)}>Update Time</button>
      
    </div>
  );
}

export default App;