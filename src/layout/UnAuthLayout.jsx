import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { unAuthrouter } from '../routes/routes';

const UnAuthLayout = () => {
  return (
    <>
    <RouterProvider router={unAuthrouter}/>
    </>
  )
}

export default UnAuthLayout