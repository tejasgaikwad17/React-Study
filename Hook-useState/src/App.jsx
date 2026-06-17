import React, { useState } from 'react'

const App = () => {

  // const [first, setfirst] = useState(100)
  // const [username, setusername] = useState(['Tejas'])
  // function changeValue(){
  //   setfirst(500)
  //   setusername('Raj')
  // }

  // return (
  //   <div>
  //       <h1>The value is {first} </h1>
  //       <h1>The usename is {username} </h1>
  //      <button onClick={changeValue} >Click</button>
  //   </div>
  // )

  //count control project 
  // let [num1, setnum1] = useState(100)

  // function changeNum(){
  //   setnum1(num1+1);
  //   console.log('clicked');
  // }

  // function decreaseNum(){
  //   setnum1(num1-1);
  // }

  // return (
  //   <div className='parent'>
  //       <h1>{num1}</h1>
  //       <button onClick={decreaseNum}>Decrease</button>
  //       <button onClick={changeNum}>Increase</button>
  //   </div>
  // )


  const [num, setfirst] = useState({name:'Tejas', age:'25'})

  const ChangeContent = () => {
      const newNum = {...num}
      newNum.name = 'Aman' 
      newNum.age = 30
      setfirst(newNum)
  }


  return(
    <div>
        <h1>{num.name}, {num.age}</h1>
        <button onClick={ChangeContent}>Click</button>
    </div>
  )

}

export default App