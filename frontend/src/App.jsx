import React, { useEffect , useState } from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar'; 
import HomePage from './pages/HomePage'; 
import CreatePost from './pages/CreatePost';
import ViewPosts from './pages/ViewPosts';
import RegisterUser from './pages/RegisterUser';
import SignInUser from './pages/LoginUser';
import PostView from './components/PostCard/PostView';
import Logout from './pages/LogoutUser';
import NavDropDown from './components/DropDown/NavDropDown';
import UserProfile from './components/ProfilePage/UserProfile';
import { useDispatch } from 'react-redux';
import { loadUser } from './Actions/user';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [username ,setUsername] =useState('');
  const { isAuthenticated } = useSelector( (state) => state.user);
  const { user } = useSelector( (state) => state.user);

  useEffect(()=>{
    dispatch(loadUser());
  },[]);

  return (
    <Router>
      <div>
        { isAuthenticated ?
        <Navbar user={user.name}/>
        :<Navbar user="" />
        }
      </div>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create"
         element={isAuthenticated ? <CreatePost /> : <SignInUser/>} 
        /> 

        <Route path="/posts"element={<ViewPosts/>} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" 
        element={isAuthenticated? <Navigate to = "/"/> : <SignInUser />} 
        />

        <Route path="post/:postId" 
        element={isAuthenticated ? <PostView /> : <SignInUser/>}
        />

        <Route path="/logout" element={<Logout/>}/>
        <Route path="/user/:userId" element={<UserProfile/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

