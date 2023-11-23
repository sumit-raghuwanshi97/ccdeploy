import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function LogoutUser(){
const navigate = useNavigate();

document.cookie = 'token=NULL';

window.location.reload();
window.location.href = '/';



 
}

export default LogoutUser;