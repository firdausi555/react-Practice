import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

function AxiosPosts() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts (GET)
  useEffect(() => {
    setIsLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        setTimeout(() => {
          setPosts(response.data);
          setIsLoading(false);
        }, 2000);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Add new post (POST)
  const handleAddPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: newTitle,
      body: newBody,
      userId: 1,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        setPosts(prev => [response.data, ...prev]);
        setNewTitle('');
        setNewBody('');
      })
      .catch(error => {
        console.error('Failed to add post:', error.message);
      });
  };
  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      // Update UI by filtering out the deleted post
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      console.error("Failed to delete post:", err.message);
    }
  };
  

  if (isLoading) return <Spinner />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>📫 Axios Posts</h2>

      <form onSubmit={handleAddPost} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Post</button>
      </form>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post.id)} style={{ color: 'red' }}>
      Delete
    </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosPosts;
