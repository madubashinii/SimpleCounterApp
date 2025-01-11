import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
