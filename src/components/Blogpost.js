import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const BlogPost = ({post}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the blog post from the server
    // Update the "comments" state
  }, []);
  // eslint-disable-next-line no-unused-vars
  const handleSetComments = () => {
    // Use setComments if needed
  };

  // eslint-disable-next-line no-unused-vars
  const unusedVariable = setComments;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;
