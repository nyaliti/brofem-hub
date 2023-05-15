import React, {useEffect, useState} from 'react';
import BlogPost from './BlogPost';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the server
    // Update the "posts" state
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleSetPosts = () => {
    setPosts([...posts, {id: 1, title: 'New Post', content: 'Lorem ipsum'}]);
  };

  return (
    <div>
      <h2>Welcome to the Blogging Platform</h2>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
