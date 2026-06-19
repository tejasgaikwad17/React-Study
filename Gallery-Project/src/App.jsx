import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  const [userData, setUserData] = useState([])

  let preventImage = "No Data to show click on a Button"
  if(userData.length > 0){
    preventImage = userData.map(function(elem, idx){
      return <div className='bg-white h-50 w-50'>
        <img className='w-fit object-contain'  src={elem.download_url} alt="" />
      </div>
    })
  }
  const getData = async() =>{
    // console.log("Data aa gaya");
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');
    // console.log(response);  
    setUserData(response.data);
    console.log(userData);
    
  }

  return (
    <div className='bg-black h-screen text-white p-4'>
        <button onClick={getData} className='bg-green-600 m-5 px-5 py-2 rounded text-white active:scale-95'>
          Get Data
        </button>

        <div>
            <div className='flex flex-wrap gap-4'>
              {preventImage}
            </div>
        </div>
    </div>
  )
}

export default App