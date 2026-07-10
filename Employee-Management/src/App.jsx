import React from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div className='bg-black'>
        {/* <Login /> */}
        {/* <EmployeeDashboard /> */}
        <AdminDashboard />
    </div>
  )
}

export default App