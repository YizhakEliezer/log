import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase/firebase"
import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import '../../comp/login/globals.css'
import SignUp from "./SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth"


const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = useState('');
    const [validEmail, setValidEmail] = React.useState("");
    const [validButton, setValidButton] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [nameUser, setNameUser] = React.useState(null);
    const [erorUserOrPass, setErorUserOrPass] = React.useState(null);


    const [isRegistration, setIsRegistration] = useState(false);


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                styleScreen(userCredential);
            })
            .catch((error) => {
                setErorUserOrPass('username or password is wrong')
                console.log(error)
            })
    }






    const signUp = (e) => {
        e.preventDefault()


        if (password !== confirmPassword) {
            setErorUserOrPass("Passwords don't match");

        }

        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    styleScreen(userCredential);
                })
                .catch((error) => {

                    console.log(error)
                })
        }

    }







    const signGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                styleScreenGoogle(result);
            })
            .catch((error) => {
                console.log(error)
                setErorUserOrPass('username or password is wrong')
            })


    }



    const styleScreen = (name) => {
        document.body.style.backgroundColor = '#eee';
        document.querySelector('.main').style.display = 'none';
        const atIndex = name.user.email.indexOf('@');
        setNameUser("Welcome " + name.user.email.substring(0, atIndex) + "...")
    }




    const styleScreenGoogle = (name) => {
        document.body.style.backgroundColor = '#eee';
        document.querySelector('.main').style.display = 'none';
        setNameUser("Welcome " + name.user.displayName)
    }















    const toggleStyle = () => {
        setClicked(true);
        if (validButton) {
            document.body.style.backgroundColor = '#eee';
            document.querySelector('.main').style.display = 'none';

        } else {
            setValidEmail("email is invalid");
        }
    };




    const valid = (event) => {
        const email = event.target.value;
        setEmail(event.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setValidEmail("");
            setValidButton(true);

        } else {
            setValidEmail("email is invalid");
            setValidButton(false);
        }
    };





    const handleRegistrationClick = () => {
        setIsRegistration(true);
        setEmail('');
        setPassword('');
        setErorUserOrPass('');
    };


const reastPassord=()=>{
    // history('/resetPaa')
}

    //   const confirmPasswordChange = () => {
    //     if (password !== confirmPassword) {
    //       setErorUserOrPass("Passwords don't match");

    //     } 
    //     else {
    //       setErorUserOrPass(null);
    //     }
    //   }


    return (
        <div>

            {/* 
            {value ? <p>sing in </p> : <p>sing out</p>}


            <form onSubmit={signIn}>
                <input placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>login</button>
            </form>
            <button onClick={signGoogle}>sign with google</button>

            <div>{email} </div> */}















            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&amp;display=swap" rel="stylesheet"></link>

            <div className="header">
                <i className="fa-solid fa-list-check"></i>
                <p className="nameUser">{nameUser}</p>
            </div>

            <div className='main'>
                <div className='start-work'>
                    <h1>Welcome to your task log</h1>
                    <h1>Click "Start" to start working.</h1>
                    {/* <input placeholder="enter email name" onChange={valid}></input> */}
                    {/* <input placeholder="enter your password"></input> */}


                    {/* 
                    <form onSubmit={signIn}>

                    <input placeholder="enter email name" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                     <input placeholder="enter your password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                     <span className="valid">{erorUserOrPass}</span>

                        <div className="button-Registration">
                            <button className="Registration">Registration</button>
                            <button className={clicked && !validButton ? "erorButton" : ""} type='submit'>LogIn</button>

                        </div>

                    </form> 
                    
                    */}



                    {isRegistration ? (
                        <form onSubmit={signUp}>
                            <input placeholder="enter your email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <input placeholder="enter your password" type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <input placeholder="password confirm" type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            <span className="valid">{erorUserOrPass}</span>
                            <button className="Registration" type='submit'>Registration</button>
                        </form>
                    ) : (








                        <form onSubmit={signIn}>

                            <input placeholder="enter your email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <input placeholder="enter your password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <span className="valid">{erorUserOrPass}</span>

                            <div className="button-Registration">
                                <button type='button' className="Registration" onClick={handleRegistrationClick}>Registration</button>
                                <button className={clicked && !validButton ? "erorButton" : ""} type='submit'>LogIn</button>
                            
                            </div>

                        </form>

                    )}









                    <span className="valid">{validEmail}</span>



                    {/* <div className="button-Registration">
                    {/* <button className="Registration" type='submit'>Registration</button> */}
                    {/* <button onClick={toggleStyle} className={clicked && !validButton ? "erorButton" : ""} >LogIn</button> */}

                    {/* </div> */}






                    <button class="signin" onClick={signGoogle}>
                        <svg
                            viewBox="0 0 256 262"
                            preserveAspectRatio="xMidYMid"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                fill="#4285F4"
                            ></path>
                            <path
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                fill="#34A853"
                            ></path>
                            <path
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                fill="#FBBC05"
                            ></path>
                            <path
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                fill="#EB4335"
                            ></path>
                        </svg>
                        Sign in with Google
                    </button>
                    <p className="reast-pass" onClick={reastPassord}>Forget Password?</p>



                </div>
            </div>











        </div>
    )




}

export default SignIn
