import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between items-center px-10 py-10'>
        <div>
            <h2 className='text-2xl font-semibold text-white'>Hello</h2>
            <h1 className='text-3xl font-bold text-white'>Tejas 👋</h1>
        </div>
        <div>
            <button className='bg-red-500 p-2 rounded font-semibold text-white'>Log Out</button>
        </div>
    </div>
  )
}

export default Header