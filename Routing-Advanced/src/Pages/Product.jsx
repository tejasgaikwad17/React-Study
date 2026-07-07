import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Women from './Women'
import Men from './Men'
import Kids from './Kids'
const Product = () => {
  return (
     <div className=''>
      <div className='flex justify-center gap-10 font-semibold text-xl mb-8 '>
          <Link to="/product/men">Men</Link>
          <Link to="/product/women">Women</Link>
          <Link to="/product/kids">Kids</Link>
      </div>
      <div className='flex justify-center'>
          {/* <h1>
        Product
      </h1> */}
      </div>
      <Outlet />
    </div>
  )
}

export default Product