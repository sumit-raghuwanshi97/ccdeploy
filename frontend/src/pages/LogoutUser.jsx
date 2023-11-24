import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LogoutUser(){
const navigate = useNavigate();

axios.get('/user/logout');

window.location.reload();
window.location.href = '/';



 
}

export default LogoutUser;