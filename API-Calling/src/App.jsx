import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data, setdata] = useState([])

  const getData = async () => {
    // console.log('data collected');
    //Fetch type
  //  const response = await fetch('https://jsonplaceholder.typicode.com/users')
   
  //  const data = await response.json();
  //  console.log(data);
  

  //axios type
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users') //this methiod used for the api fetch
  // console.log(response.data); //we can directly access the data using data.

  //axios with the help of other API
//for accessing the data or mapping the data we use useState hook and the mapping  functions
  

  const response = await axios.get('https://picsum.photos/v2/list');
  // console.log(response.data);
  setdata(response.data);
  
  
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx){
          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>

    </div>
  )
}

export default App