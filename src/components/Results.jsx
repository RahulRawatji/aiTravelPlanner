import React from 'react'
import { useLocation } from 'react-router-dom'
const Results = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div>
      <h3 className='text-3xl text-center py-10'> ⭐️ Travel Planner ⭐️</h3>
      <div className='w-3/5 mx-auto font-poppins leading-loose'>
        <p>{data}</p>
      </div>
    </div>
  )
}

export default Results