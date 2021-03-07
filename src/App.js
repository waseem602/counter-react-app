import React, {useState} from 'react';
import './App.css';
import {Message} from './Message';
import {Reddit} from './Reddit';

function App() {
  
  let [count, setCount] = useState(0);
  let [time, setTime]=useState(false);
  
  return (
  
    <body className={time ? 'day' : 'night'}>
    <div>

      <h2 className={time ? 'day':'night'}>
        Its {time ? 'day':'night'}
      </h2>
    <Message counter={count}/>
    
    <br />
    
      <button onClick={()=>setCount(++count)}>
          Counter +
      </button>

      <button onClick={()=>setCount(--count)}>
          Counter -
      </button>

      <button onClick={()=>setCount(0)}>
          Reset
      </button>

      <button onClick={()=>setTime(!time)}>
        Change Day/Night
      </button>

      <br />
      <br />
      <br />

      <Reddit/>
        
    </div>
    </body>
    
    
    
  );

}


export default App;