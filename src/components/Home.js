import React from 'react';
import Post from './Post';

const Home = () => {
  // Sample data for blog posts
  const posts = [
    {id: 1, title: 'First Post', content: 'This is the first blog post.'},
    {id: 2, title: 'Second Post', content: 'This is the second blog post.'},
    // Add more sample posts
  ];

  return (
    <div>
      <h2>Recent Blog Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Home;
