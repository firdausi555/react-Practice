import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: theme === 'dark' ? '#fff' : '#333',
    backgroundColor: theme === 'dark' ? '#333' : '#f4f4f4',
  };

  return (
    <div style={boxStyle}>
      <h2>{theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>
      <p>This box updates based on the current theme using context.</p>
    </div>
  );
}

export default ThemedBox;
