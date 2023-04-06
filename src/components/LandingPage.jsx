import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

const LandingPage = () => {
    const navigate = useNavigate();

    const clickHandler = () =>{
        return navigate("/filter")
    }
  return (
    <div className='flex justify-center items-center h-screen bg-amber-500'>
       <Button variant="contained" onClick={clickHandler}>Login</Button>
    </div>
  )
}

export default LandingPage