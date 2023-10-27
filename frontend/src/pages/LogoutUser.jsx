import { useEffect } from "react";

function LogoutUser(){
 useEffect(()=>{
    const authenticated = localStorage.getItem("authenticated");
    if(authenticated){
        localStorage.setItem("authenticated",false);
        
    }
 });
    
}

export default LogoutUser;