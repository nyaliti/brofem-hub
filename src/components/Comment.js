import React from 'react';

// eslint-disable-next-line react/prop-types
const Comment = ({isAuthenticated, handleCommentSubmit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      // Logic to submit the comment
      // Call handleCommentSubmit() with the comment data
    } else {
      // Show a login prompt or message
      alert('Please login to submit a comment.');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write a comment..."></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default Comment;
