import React, { useContext } from 'react'
import { GrLogin } from 'react-icons/gr';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../config/firebaseConfig';

import { UserContext } from '../store/UserContext';
import './LoginPage.css';

const LoginPage = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const { usernameHandler} = useContext(UserContext);
    

    const clickHandler = () =>{
      signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName } = result.user;
        usernameHandler(displayName);
    
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

      });
    }

  return (<>
    <div className='landing_page flex justify-center items-center relative'>
          <div className='absolute top-10 w-10/12 border-b-2 border-gray-600 pb-2'>
            <div>
            <h3 className='font-bold text-2xl text-gray-800 font-poppins'>ZIRECTLY</h3>
             <p className='text-gray-800 font-poppins'>Your Travel Planner</p>
            </div>
         
          </div>
       <button className="bg-[#eff6ff] text-gray-800 px-5 py-2 text-xl rounded-md font-semibold flex items-center gap-2" onClick={clickHandler}>LOGIN <GrLogin/></button>
    </div>
  </>
  )
}

export default LoginPage;
