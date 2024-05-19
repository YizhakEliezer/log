import { useEffect,useState } from "react";
import {auth} from "../../firebase/firebase"
import { initializeApp } from "firebase/app";
import React from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"


const SignUp = () => {
   const [email, setEmail] = React.useState('')
   const [password, setPassword] = React.useState('')
   const [error, setError] = React.useState('')
   const [loading, setLoading] = React.useState(false)

   const signUp=(e) =>{
       e.preventDefault()
       createUserWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
               console.log(userCredential)
           })
          .catch((error) => {

               console.log(error)
           })
   }

   
 return (
   <div>
     <form onSubmit={signUp}>
          <input placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type='submit'>signUp</button>
     </form>


 

   </div>
 )
}

export default SignUp
