import { Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { app } from "./config/firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./store/UserContext";
import AuthLayout from "./layout/AuthLayout";
import UnAuthLayout from "./layout/UnAuthLayout";
import Loading from "./layout/Loading";

function App() {
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);
  const {username, usernameHandler} = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(()=>{
  //   checkIfLoggedIn();
  // },[username]);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsAuth(true)
      setIsLoading(false);
    } else {
      setIsAuth(false)
      setIsLoading(false);
    }
  });

  if(isLoading){
    return <Loading/>
  }
  // const checkIfLoggedIn = () =>{
  //   if(username){
  //     setIsAuth(true)
  //   }else{
  //     setIsAuth(false);
  //   }
  // }

  return (
    <>
    {isAuth? <AuthLayout/>: <UnAuthLayout/>}
    </>
  );
}

export default App;
