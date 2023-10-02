import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need Axios or another HTTP library to make API requests.
import CreatePost from './CreatePost';
import './App.css';

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

  const hideCreatePost = () => {
    setCreatePostVisible(false);
  };

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpansion = (index) => {
    setExpandedCards((prevState) => {
      const newExpandedState = [...prevState];
      newExpandedState[index] = !newExpandedState[index];
      return newExpandedState;
    });
  };

  return (
    <div>
       <button className="create" onClick={toggleCreatePost}>Create Post </button>
      {isCreatePostVisible && <CreatePost onHide = {hideCreatePost} />}
      <h1>INTERVIEW EXPERIENCES</h1>
      <section>
      <ul>
        {interviews.map((interview, index) => (
          <li key={index} className={`card ${expandedCards[index] ? 'expanded' : ''}`}>
            <div className="card-header">
                <h2>{interview.userName}</h2>
                <button onClick={() => toggleCardExpansion(index)}>
                  {expandedCards[index] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            
            <h3>{interview.companyName}</h3>
            <h4>{interview.status}</h4>
             {expandedCards[index] ? (
                <div className="details" dangerouslySetInnerHTML={{ __html: interview.details }} />
              ) : null}
          </li>
        ))}
      </ul>
      </section>
    </div>
  );
}

export default App;
