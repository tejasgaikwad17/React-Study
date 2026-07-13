import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  // console.log(handleLogin);
  

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  function SubmitHandler(e){
    e.preventDefault();
      // console.log("Email is "+ Email+" Password is "+ Password );
      handleLogin(Email, Password)
      setEmail("")
      setPassword("")
  }
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
        <div>
            <form  className=' flex flex-col border-emerald-600 border-2 rounded-xl p-20 w-2xl' onSubmit={(e) => SubmitHandler(e) }>

              <input value={Email}
               onChange={(e)=> {
                // console.log(e.target.value);
                setEmail(e.target.value);
              }}
               type="email" placeholder='Enter Username'
               className='border-emerald-600 border-2 text-white rounded-2xl placeholder:text-gray-400 px-5 py-2 outline-none text-xl bg-transparent' required />

              <input value={Password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
               type="password" placeholder='Enter Password'
                className='border-emerald-600 border-2 text-white rounded-2xl mt-5 placeholder:text-gray-400 px-5 py-2 outline-none text-xl bg-transparent' required />
              
                <button className='bg-emerald-600 rounded-2xl mt-10 text-gray-200 p-2 text-xl'> Log In</button>
             
            </form>
        </div>
    </div>
  )
}

export default Login