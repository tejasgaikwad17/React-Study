import React from 'react'

const TaskCount = () => {
  return (
    <div className='flex gap-5 justify-between mx-10'>
        <div className='bg-red-400 w-[45%] py-9 px-6 rounded-xl'>
          <h1 className='text-3xl text-white font-bold'>0</h1>
          <h2 className='text-xl text-white font-semibold'>New Task</h2>
        </div>
        <div className='bg-blue-400 w-[45%] py-9 px-6 rounded-xl'>
          <h1 className='text-3xl text-white font-bold'>0</h1>
          <h2 className='text-xl text-white font-semibold'>New Task</h2>
        </div>
        <div className='bg-green-400 w-[45%] py-9 px-6 rounded-xl'>
          <h1 className='text-3xl text-white font-bold'>0</h1>
          <h2 className='text-xl text-white font-semibold'>New Task</h2>
        </div>
        <div className='bg-yellow-400 w-[45%] py-9 px-6 rounded-xl'>
          <h1 className='text-3xl text-white font-bold'>0</h1>
          <h2 className='text-xl text-white font-semibold'>New Task</h2>
        </div>
    </div>
  )
}

export default TaskCount