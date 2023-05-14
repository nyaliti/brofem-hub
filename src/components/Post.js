import React from 'react';
import PropTypes from 'prop-types';

const Post = ({title, content}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* Add comment section */}
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
