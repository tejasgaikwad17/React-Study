import React, { useContext } from 'react'
import { PostContext } from "./Context/ThemeContext";



const Button = () => {

    const [theme, setTheme] = useContext(PostContext)

    const OnClick = () => {
        setTheme('dark');    
    }

  return (
    <div className=''>
        <button className='bg-sky-300' onClick={OnClick}>Change Theme {theme}</button>
    </div>
  )
}

export default Button