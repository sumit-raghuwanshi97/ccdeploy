import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios  from 'axios';
import AlertBox from '../components/Popups/AlertBox';

function RegisterUser() {

  const navigate = useNavigate();
  const [message , setMessage] = useState('');
  const [status , setStatus] = useState(false);

  const [showAlert , setShowAlert] = useState(false);
  const HandleOnClose = () => {
    setShowAlert(false);
    if(status) { navigate('/login'); }
    else { navigate('/register')}
  
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    branch: '',
    graduationYear: '',
  });


  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'confirmPassword' && formData.password !== value) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        branch: formData.branch,
        graduationYear: formData.graduationYear,
      };

    console.log(postData);
    const response = await axios.post('/user/register',postData);
    
    console.log(response);
    setMessage(response.data.message);
    setStatus(response.data.success);
    setShowAlert(true);

    setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        branch: '',
        graduationYear: '',
      });
    
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 4in)', // Adjust the height as needed
    backgroundColor: '#219EBC', // Background color for the entire viewport
    paddingTop: '0px', // Space from the top
  };

  const formStyle = {
     // Container width is 90% of the viewport
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    flexDirection: 'column',
   
  };
  
  return (
    
    <div style = {containerStyle}>
    <div style = {formStyle} className="flex justify-center items-center  p-3 pt-5">

      <form onSubmit={handleSubmit} className="bg-white ,shadow-md rounded p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded shadow appearance-none ${
              passwordError ? 'border-red-500' : ''
            }`}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="branch" className="block text-gray-700 text-sm font-bold mb-2">
            Branch
          </label>
          <select
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            // className="w-full px-3 py-2 border rounded shadow appearance-none"
            className="block w-full px-3 py-2 border shadow rounded-md focus:outline-none focus:ring focus:border-blue bg-white"
            required>
            <option  value="none">None</option>
            <option  value="Computer Science">Computer Science</option>
            <option  value="Information Technology">Information Technology</option>
            <option  value="Electronics and TeleCommunication">Electronics and TeleCommunication</option>
            <option  value="Electronics and Instrumental">Electronics and Instrumental</option>
            <option  value="Mechanical">Mechanical</option>
            <option  value="Civil">Civil</option>
            
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="graduationYear" className="block text-gray-700 text-sm font-bold mb-2">
            Graduation Year
          </label>
          <input
            type="text"
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
        <p
        className="block text-black-700 text-sm font-bold mb-2">
          Already have an account ? <Link 
           className="text-blue-700 "
          to="/login">Sign in</Link>
        </p>
        </div>
      </form>
    </div>
    { showAlert && <AlertBox message={message}  status={status} onClose={HandleOnClose}/>}
    </div> 
  );
}

export default RegisterUser;
