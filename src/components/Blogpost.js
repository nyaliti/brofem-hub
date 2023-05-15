import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({post}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* Display comments */}
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
