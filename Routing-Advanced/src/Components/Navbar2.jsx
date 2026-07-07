import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {

    
  let navigate = useNavigate();

  return (
    <div className='px-2 py-1 bg-cyan-500'>
        
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-emerald-600 px-4 py-3 rounded m-2 cursor-pointer active:scale-95"
        >
          Return to the main page
        </button>

        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-emerald-600 px-4 py-3 rounded m-2 cursor-pointer active:scale-95"
        >
          Back
        </button>

         <button
          onClick={() => {
            navigate(+1);
          }}
          className="bg-emerald-600 px-4 py-3 rounded m-2 cursor-pointer active:scale-95"
        >
          Next
        </button>
     
    </div>
  )
}

export default Navbar2