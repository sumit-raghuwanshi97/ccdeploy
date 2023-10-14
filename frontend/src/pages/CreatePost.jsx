import React, { useState } from 'react';

function CreatePost() {
  const [formData, setFormData] = useState({
    companyName: '',
    status: '',
    description: '',
    creatorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Handle form submission here
    console.log(formData); // You can send this data to your server or perform any other action
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
          <h2 style={headingStyle} className="text-2xl  font-bold mb-4">Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="creatorName" className="block text-gray-600">Name:</label>
              <input
                type="text"
                id="creatorName"
                name="creatorName"
                value={formData.creatorName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-600">Company :</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-600">Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
                rows="3"
              ></textarea>
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
    </div>
  );
}

export default CreatePost;