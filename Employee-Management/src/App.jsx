import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
      // console.log(email, password); undefined undefined

      if(email == 'admin@g.com' && password == '123'){
        // console.log("This is admin");
        setUser('admin')
        // console.log(user);
        
      }else if(email == 'user@g.com' && password == '123'){
        // console.log("This is user");
                setUser('employee')
                // console.log(user);               
      }
      else{
        // console.log("Invalid credential");
        alert('Invalid Credencials')
        
      }
      
  }

  const data = useContext(AuthContext)
  console.log(data);
  

  // handleLogin('user@g.com', '123'  )

  return (
    <div className='bg-black'>
        {!user ? <Login handleLogin = {handleLogin}  /> : ''}
        {user ==  'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
    </div>
  )
}

export default App