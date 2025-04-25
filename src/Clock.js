import { useState, useEffect ,useContext} from 'react';
import UserContext from './UserContext';

function Clock() {
    const user = useContext(UserContext);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    // Cleanup function
    return () => {
      clearInterval(intervalId); 
      console.log('Clock component unmounted, timer cleared.');
    };
  }, []); 

  return (
    <div style={clockStyle}>
      <h2>🕒 Live Clock</h2>
      <p style={timeStyle}>{time.toLocaleTimeString()}</p>
      <p>👤 User: {user.name} ({user.role})</p>

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
