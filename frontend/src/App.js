import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need Axios or another HTTP library to make API requests.
import CreatePost from './CreatePost';

function App() {

  const [isCreatePostVisible, setCreatePostVisible] = useState(false);

  const toggleCreatePost = () => {
    setCreatePostVisible(!isCreatePostVisible);
  };

  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    // Make an API request to fetch interview experiences
    axios.get('/api/interview-experiences') // Adjust the URL to match your API endpoint
      .then((response) => {
        setInterviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching interview experiences:', error);
      });
  }, []);

  return (
    <div>
      <h1>Interview Experiences</h1>
      <ul>
        {interviews.map((interview, index) => (
          <li key={index}>
            <h2>{interview.userName}</h2>
            <h3>Company: {interview.companyName}</h3>
            <h3>Status: {interview.status}</h3>
            <p>{interview.details}</p>
          </li>
        ))}
      </ul>
      <button onClick={toggleCreatePost}>Create Post</button>
      {isCreatePostVisible && <CreatePost/>}
    </div>
  );
}

export default App;
