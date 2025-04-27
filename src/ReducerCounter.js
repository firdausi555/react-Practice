import React, { useReducer } from 'react';

// 1. Define your reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  // 2. Set up useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>useReducer Counter</h2>
      <p style={{ fontSize: '2em' }}>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginLeft: '10px' }}>➖ Decrement</button>
    </div>
  );
}

export default ReducerCounter;
