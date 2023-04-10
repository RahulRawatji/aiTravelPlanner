import React from 'react'
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

const Results = () => {
  const location = useLocation();
  const { data } = location.state;

  
  let formatted_data  = data.split('\n\n');
  return (
    <div>
      <h3 className='text-3xl text-center py-10'> ⭐️ Travel Planner ⭐️</h3>
      <div className='w-3/5 mx-auto font-poppins leading-loose'>
        {
          formatted_data.map(f_data =>{
            return <div className='my-4'>
                    <ReactMarkdown>{f_data}</ReactMarkdown>
                  </div>
          })
        }
      </div>
    </div>
  )
}

export default Results