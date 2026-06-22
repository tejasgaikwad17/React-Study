import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './components/Card';



const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  let preventImage = <h2 className='text-2xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Imagaes Loading...</h2>
  if(userData.length > 0){
    preventImage = userData.map(function(elem, idx){
      return <div key={idx} >
        <Card elem = {elem} />
      </div>
    })
  }

  useEffect(() => {
    getData()
  }, [index])
  
  const getData = async() =>{
    // console.log("Data aa gaya");
    const response = await axios.get(`https://api.escuelajs.co/api/v1/users?limit=${index}`);
    // console.log(response);  
    setUserData(response.data);
    console.log(userData);
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white p-4'>

      {/* <h1>{index}</h1> */}
        {/* <button onClick={getData} className='bg-green-600 m-5 px-5 py-2 rounded text-white active:scale-95'>
          Get Data
        </button> */}

        <div>
            <div className='flex flex-wrap gap-4 justify-around '>
              {preventImage}
            </div>

            <div className='flex justify-center items-center gap-4 mt-20'>
          <button onClick={()=>{
              // console.log('Preview cliked');
              if(index >1 ){
                setindex(index-1) 
                setUserData([])
              }
                    
          }}
          
          
         style={{
  opacity: index == 1 ? 0.6 : 1,
  cursor: index == 1 ? "not-allowed" : "pointer",
}}

          className='bg-amber-500 px-6 py-3 rounded-xl text-lg cursor-pointer active:scale-95 text-black font-bold'>Prev</button>

          <h4>Page {index}</h4>

          <button onClick={()=>{
              // console.log('next cliked');
              setindex(index+1)
                setUserData([])
          }} 
          className='bg-amber-500 px-6 py-3 rounded-xl text-lg cursor-pointer active:scale-95 text-black font-bold'>Next</button>
        </div>

        </div>
         
    </div>
  )
}

export default App