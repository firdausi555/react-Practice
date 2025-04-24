import { useState, useEffect } from 'react';

function TimeoutExample() {
  const [message, setMessage] = useState("Wait for it...");

  useEffect(() => {
    // Set a timer to update the message after 3 seconds
    const timeoutId = setTimeout(() => {
      setMessage("Boom! 💥");
    }, 3000); // 3 seconds

    // Cleanup function (optional but good practice)
    return () => {
      clearTimeout(timeoutId);
      console.log("Timeout cleared before unmounting");
    };
  }, []); // Runs only once on mount

  return (
    <div style={styleBox}>
      <h2>{message}</h2>
    </div>
  );
}

const styleBox = {
  textAlign: 'center',
  fontSize: '2em',
  marginTop: '50px',
  fontFamily: 'monospace'
};

export default TimeoutExample;
