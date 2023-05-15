import React, {useState} from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    // Implement create post logic
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
