import { useState, useEffect } from 'react';
import Spinner from './Spinner';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
  
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          setPosts(data);
          setIsLoading(false);
        }, 2000); 
      })
      .catch(err => {
        console.error(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: Date.now(), // Unique id based on timestamp
      title: newTitle,
      body: newBody
    };

    // Add new post on top of posts
    setPosts(prevPosts => [newPost, ...prevPosts]);

    // Clear input fields
    setNewTitle('');
    setNewBody('');
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {/* Form to add new post */}
      <form onSubmit={handleAddPost} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Post Title" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <input 
          type="text" 
          placeholder="Post Body" 
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          required
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add Post</button>
      </form>

      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
