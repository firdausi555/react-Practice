import Greeting from './Greeting';
import Counter from './Counter';
import RandomUser from './RandomUser';
import Clock from './Clock';
import UserContext from './UserContext';
import TimeoutExample from './TimeoutExample';
import ThemeContext from './ThemeContext';
import ThemedBox from './ThemedBox';

import { useState } from 'react';
import ReducerCounter from './ReducerCounter';
import Posts from './Posts';

function App() {
  const [user] = useState({ name: 'Sabil', role: 'Developer' });
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  const appStyle = {
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#121212' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',  };

  const buttonStyle = {
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: theme === 'dark' ? '#444' : '#ddd',
    color: theme === 'dark' ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ padding: '20px' }}>
          <h1>Hey</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Greeting name="sabil" />
          <Greeting name="Alex" />
          <Greeting name="Taylor" />
          <Greeting name="Sky" />
          <Counter />
          {/* <RandomUser /> */}
          <Clock />
          <TimeoutExample />
          <button style={buttonStyle} onClick={toggleTheme}>
            Toggle Theme
          </button>
          <ThemedBox />
          <ReducerCounter/>
          <Posts/>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}



export default App;