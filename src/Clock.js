import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up the timer
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    // Cleanup function
    return () => {
      clearInterval(intervalId); // clear the interval when the component unmounts
      console.log('Clock component unmounted, timer cleared.');
    };
  }, []); // Run only once when the component mounts

  return (
    <div style={clockStyle}>
      <h2>🕒 Live Clock</h2>
      <p style={timeStyle}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

const clockStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const timeStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  color: '#2c3e50',
};

export default Clock;
