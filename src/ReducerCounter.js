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




// Example =>2
// import React, { useReducer } from 'react';

// const initialState = { count: 0, message: "" };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 };
//     case 'decrement':
//       return { ...state, count: state.count - 1 };
//     case 'reset':
//       return { ...state, count: 0 };
//     case 'setMessage':
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// }

// function ReducerCounter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <p>{state.message}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//       <button onClick={() => dispatch({ type: 'setMessage', payload: 'Hello, world!' })}>Set Message</button>
//     </div>
//   );
// }
// export default ReducerCounter;
