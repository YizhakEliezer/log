import React, { useEffect, useState } from 'react'
import {auth} from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
    const[authUser,setAuthUser]=useState(null);

    useEffect(() =>{
        
        const listen=onAuthStateChanged(auth,(user)=>{
           if (user){
            setAuthUser(user);
           }else{
            setAuthUser(null);
           }
        });
        
        
     } ,[])




  return (
    <div> 
  
      {authUser ? <p>sing in </p> : <p>sing out</p>}
    </div>
  )
}

export default AuthDetails
