import React, { useState } from "react";
import PostModel from "../../models/PostModel";
import ServiceModel from '../../models/ServiceModel'
import './PostsPage.css'
import useServices from '../../hooks/Services/useServices'

function NewPost(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [college, setCollege] = useState("");
  const [service, setService] = useState("");
  const [content, setContent] = useState("");
  const [services, fetchServices] = useServices()

  function handleSubmit(event) {
    event.preventDefault();
    console.log(service)
    PostModel.create({ title, author, service, content }).then(
      (data) => {
        props.history.push("/posts");
      }
    );
  }

  console.log(service)
  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            name='author'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='college'>College:</label>
          <input
            type='text'
            name='college'
            onChange={(e) => setCollege(e.target.value)}
            value={college}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='service'>Service:</label>
          <select onChange={e=>setService(e.target.value)} name = 'service' value={service}>
          <option>Choose a Service</option>
          {services.map(service => {
            console.log(service)
            return <option value= {service._id}>{service.name}</option>
          })}
          </select>
          {/* <input
            type='text'
            name='service'
            onChange={(e) => setService(e.target.value)}
            value={service}
          /> */}
        </div>
        <div className='form-input'>
          <label htmlFor='content'>Content:</label>
          <input id="content"
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
