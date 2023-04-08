import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routes/routes'

const AuthLayout = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default AuthLayout;