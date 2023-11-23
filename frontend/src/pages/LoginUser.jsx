import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import axios  from 'axios';
import { Link , useNavigate } from 'react-router-dom';
import AlertBox from '../components/Popups/AlertBox';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Actions/user';
import { useSelector } from 'react-redux';

function SignInUser() {
  
  const [cookies, setCookie] = useCookies(['token']);
  const [showAlert , setShowAlert] = useState(false);
  const [alertMessage , setAlertMessage] = useState({});
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnClose = () =>{
    if( isAuthenticated ){
      window.location.href = '/';
    }
    setShowAlert(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData.email,formData.password));

    console.log("Login Details Send");
    console.log(formData);

    await axios.post('/user/login',formData)
    .then( (response)=> {
     
    const success = response.data.success;
    const message = response.data.message;
    console.log(message);

     setAlertMessage({
      success,
      message,
     });

    if(success===false)
    {
      setShowAlert(true);
    }
    else{
   
    setFormData({
        email: '',
        password: '',
      });
    
      setShowAlert(true);
    }
  })
  .catch((error)=>{
    const success = error.response.data.success;
    const message = error.response.data.message;
    console.log(message);

     setAlertMessage({
      success,
      message,
     });
    setShowAlert(true);
  })
    };

  const containerStyle = {
    minHeight: 'calc(100vh - 4in)', // Adjust the height as needed
    backgroundColor: '#219EBC', // Background color for the entire viewport
    paddingTop: '0px', // Space from the top
  };

  
  return (
    <div style = {containerStyle}>
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
        
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
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#fb8500] hover:bg-[#ffb703] text-black text-gray font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
        <p
        className="block text-black-700 text-sm font-bold mb-2">
          Don't have an account ? <Link 
           className="text-blue-700"
          to="/register">Sign up</Link>
        </p>
        </div>
      </form>
    </div>    
    {showAlert && <AlertBox message={alertMessage.message} status={alertMessage.success} 
    onClose={handleOnClose}/>}
    </div>
  );
}

export default  SignInUser;
