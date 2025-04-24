import { useState, useEffect } from 'react';

function RandomUser() {
  const [user, setUser] = useState(null);  // We'll store the user data here
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    // Fetch random user data when the component loads
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);  // Set the fetched user data
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  if (loading) {
    return <p>Loading...</p>;  // Show loading message while data is being fetched
  }

  return (
    <div style={userCardStyle}>
      <h2>{user.name.first} {user.name.last}</h2>
      <img src={user.picture.large} alt="User" style={imageStyle} />
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  );
}

// Some basic styles
const userCardStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  width: '250px',
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  borderRadius: '50%',
  marginBottom: '15px',
  width: '100px',
  height: '100px',
};

export default RandomUser;
