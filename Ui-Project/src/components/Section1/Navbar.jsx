import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-10 '>
        <h2 className='bg-black text-white rounded-full px-5 py-3 uppercase tracking-wider font-semibold text-sm'>Target Audience</h2>
        <button className='bg-gray-200 px-5 py-3 text-black rounded-full uppercase tracking-wider font-semibold text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar