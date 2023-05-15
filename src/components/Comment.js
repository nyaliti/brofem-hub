/* eslint-disable react/prop-types */
import React from 'react';

const Comment = ({comment}) => {
  return (
    <div>
      <p>{comment.content}</p>
      <p>Posted by: {comment.user}</p>
    </div>
  );
};

export default Comment;
