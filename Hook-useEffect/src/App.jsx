import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    aChange();
    // console.log('useEffect is running');    
  },[num1])
    useEffect(function(){
    bChange();
    // console.log('useEffect is running');    
  },[num2])

  function aChange(){
      console.log('Change of value A');      
  }
  function bChange(){
      console.log('Change of value B');
  }


  return (
    <div>
        <h1>Button A : {num1} </h1>
        <h1>Button B : {num2} </h1>

        <button onClick={()=> {
          setnum1(num1+1)
        }}>Button A</button>
        <button onClick={()=> {
          setnum2(num2+100)
        }}>Button B</button>
    </div>
  )
}

export default App