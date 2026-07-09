import React from 'react'
import Header from '../Other/Header'
import TaskCount from '../Other/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-black h-screen'>
        <Header />
        <TaskCount />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard