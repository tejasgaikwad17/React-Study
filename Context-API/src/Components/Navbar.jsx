import React, { useContext } from 'react'
import { PostContext } from "./Context/ThemeContext";
import Nav2 from './Nav2'

const Navbar = () => {

  const [theme] = useContext(PostContext)

  return (
    <div className={theme}>
        <h1 className='font-bold'>Tejas</h1>
        <Nav2 />
    </div>
    
  )
}

export default Navbar