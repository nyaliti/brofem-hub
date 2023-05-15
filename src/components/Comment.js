import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
  return (
    <div>
      <p>{comment.content}</p>
      {/* Display user information */}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
