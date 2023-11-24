import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import AlertBox from '../components/Popups/AlertBox';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  
  const navigate = useNavigate();
  const [showAlert , setShowAlert] = useState(false);
  const [message , setMessage] = useState("Post Created Successfully");

  const HandleOnClose = ()=> {
    setShowAlert(false);
    navigate('/posts'); 
  }

  const [formData, setFormData] = useState({
    caption : '',
    companyName: '',
    role: '',
    type: 'Full Time',
    status: 'Selected',
    content: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuillChange = (value) => {
    handleChange('content', value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    //getting token from cookies //include this in a function 
    const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    console.log(token);

    // const headers = {
    //   'Authorization' : `${token}`,
    // };
    //sending data to the backend through api 
    axios.post('/posts/createPost' , formData , {
      headers:{
        "Content-Type" : "application/json",
      },
    }).then((response)=>{
      setShowAlert(true);
    })
    .catch((error)=>{
      setMessage(error.response.data.message);
      setShowAlert(true);
    });


    };

  const containerStyle = {
    minHeight: 'calc(100vh - 4in)', // Adjust the height as needed
    backgroundColor: '#219EBC', // Background color for the entire viewport
    paddingTop: '23px', // Space from the top
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    width: '90%', // Container width is 90% of the viewport
    height: '20%', // Container height is 20% of the viewport
    background: 'white',
    margin : '30px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    flexDirection: 'column',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    textAlign: 'center', // Center button text horizontally
    margin: '0px auto',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div className='container'>
          <h2 style={headingStyle} className="text-2xl  font-bold mb-4">Write your post here.</h2>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="caption" className="block text-gray-600">Caption</label>
              <input
                type="text"
                id="caption"
                name="caption"
                placeholder='Interview Experience for abc Company '
                value={formData.caption}
                onChange={(e) => handleChange('caption', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-600">Company</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-600">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder='ex. SDE'
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required>
        
              </input>
              </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-600">Type</label>
              <select
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                 <option value="Full Time">Full Time</option>
                 <option value="Intern">Intern</option>
                 <option value="FT + Intern">FT + Intern</option>
              </select>
              </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-600">Status</label>
              <select
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required>
                   <option value="Selected">Selected</option>
                   <option value="Not Selected">Not Selected</option>
                   <option value="None">None</option>
              </select>
              </div>

            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-600">Content</label>
              <ReactQuill 
                value={formData.content}
                onChange={handleQuillChange}
                modules={quillModules}
                placeholder='Share your Interview experince here'
                formats={quillFormats}
              />
            </div>

            <button
              type="submit"
              className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-3 px-6 text-lg rounded-full inline-block"
              style={buttonStyle}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>

      { showAlert && <AlertBox message={message} status="true" onClose={HandleOnClose}/> }
    </div>
  );
}

const quillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'align': [] }],
    ['link'],
  ],
};

const quillFormats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet',
  'align', 'link',
];

export default CreatePost;
