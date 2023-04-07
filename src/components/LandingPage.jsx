import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../config/firebaseConfig';

const LandingPage = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const navigate = useNavigate();
    onAuthStateChanged(auth, user => {
      // Check for user status
      if(user){
          console.log(true)
      }else{
        console.log(user);
      }
    });
    const clickHandler = () =>{
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      
        // The signed-in user info.
        const user = result.user;
        return navigate("/filter")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }

  return (
    <div className='flex justify-center items-center h-screen bg-amber-500'>
       <Button variant="contained" onClick={clickHandler}>Login</Button>
    </div>
  )
}

export default LandingPage