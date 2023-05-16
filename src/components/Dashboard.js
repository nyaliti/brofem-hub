/* eslint-disable react/prop-types */
import React from 'react';

const Dashboard = ({posts, handleEdit, handleDelete}) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Your Blog Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <button onClick={() => handleEdit(post.id)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
