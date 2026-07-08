import React, { useContext } from 'react'
import { PostContext } from "./Context/ThemeContext";
const Nav2 = () => {
 
  const [theme, setTheme] =  useContext(PostContext);
  // console.log(theme);
    
  
  return (
    <div className='flex gap-10 font-semibold items-center text-lg'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>{theme}</h4>
        
    </div>
  )
}

export default Nav2