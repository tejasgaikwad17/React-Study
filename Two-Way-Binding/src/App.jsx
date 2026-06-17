import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submit = (e) => {
    e.preventDefault();
    console.log(`Form submit`, title);
    setTitle('');
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
            submit(e)
      }}>

        <h1>Title is {title} </h1>
          <input
            type="text"
            placeholder='Your Name'
            value={title}  //state shows data in the input  
            onChange={(e)=> {
              setTitle(e.target.value);  // update the user state when user types
              
            }}
          /> 

          <button>Submit</button>
      </form>
    </div>
  )
}

export default App