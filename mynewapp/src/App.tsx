import React, { useState } from 'react';

import './App.css';

function App() {

  const [count, setCount ] = useState(0 as number);
  const handleIncrement = () => {
    setCount(count +1);
  }
  const handleReset  = () => {
    setCount(0);
  }
  const handleDecrement = () => {
    setCount(count-1);
  }

  return (
    <>
    <h1>You have clicked me {count} times.</h1><br/>
    <button onClick = { handleIncrement }>Increment</button>
    <button onClick = { handleReset }>Reset</button>
    <button onClick = { handleDecrement }>Decrement</button>
    </>
  );
}

export default App;
