import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Blogpost from './Blogpost'; // Updated import statement

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the server
    // Update the "posts" state
  }, []);

  const handleSetPosts = () => {
    setPosts([...posts, {id: 1, title: 'New Post', content: 'Lorem ipsum'}]);
  };

  return (
    <div>
      <h2>Welcome to the Blogging Platform</h2>
      <div className="blog-posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Blogpost key={post.id} post={post} /> // Updated component name
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
      <Link to="/create-post">Create New Post</Link>
      <button onClick={handleSetPosts}>Add Sample Post</button>
    </div>
  );
};

export default Home;
