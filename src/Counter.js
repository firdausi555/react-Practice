import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={boxStyle}>
      <h2>Counter: {count}</h2>
      <button style={{ ...btnStyle, backgroundColor: '#4CAF50', color: 'white' }} onClick={increase}>➕ Increase</button>
      <button style={{ ...btnStyle, backgroundColor: '#f44336', color: 'white' }} onClick={decrease}>➖ Decrease</button>
      <button style={{ ...btnStyle, backgroundColor: '#2196F3', color: 'white' }} onClick={reset}>🔁 Reset</button>
    </div>
  );
  
}
const boxStyle = {
    border: '2px solidrgb(168, 233, 170)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };
  
  const btnStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  
export default Counter;
