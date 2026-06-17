import React from 'react'

const App = () => {
  
  function btnClick(){
    console.log('Button is click !!');
    
  }

  return (
    <div>
      <button onClick={btnClick} >Click Here</button>
    </div>
  )
}

export default App