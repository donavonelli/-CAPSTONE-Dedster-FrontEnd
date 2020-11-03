import React, { useState } from "react";
import PostModel from "../../models/PostModel";

function NewPost(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [service, setService] = useState("");
  const [content, setContent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    PostModel.create({ title, author, service, content }).then(
      (data) => {
        props.history.push("/posts");
      }
    );
  }

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='service'>Service</label>
          <input
            type='text'
            name='service'
            onChange={(e) => setService(e.target.value)}
            value={service}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='content'>Content</label>
          <input
            type='text'
            name='content'
            checked={content}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        <input type='submit' value='Save!' />
      </form>
    </div>
  );
}

export default NewPost;
