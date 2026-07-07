import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-cyan-700'>
        <h2 className='text-xl font-bold'>Tejas</h2>
        <div className='flex gap-8 text-lg font-bold'>
          
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Cources">Cources</Link>

        </div>
    </div>
  )
}

export default Navbar