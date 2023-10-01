// CreatePost.js

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

function CreatePost() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState('');

  const handleDetailsChange = (value) => {
    setDetails(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your API
    const postData = { name, companyName, status, details };
    console.log(postData);
    // Add code to send the data to your API or perform other actions
    axios.post('/api/interview-experiences',postData)
    .then((response)=>{
        console.log("Data sent successfully",response.data);
    })
    .catch((error)=>{
        console.log("error",error);
    });
    
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <label>Details:</label>
          <ReactQuill
            value={details}
            onChange={handleDetailsChange}
            modules={{ toolbar: true }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
