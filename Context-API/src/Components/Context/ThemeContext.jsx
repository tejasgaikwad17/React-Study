import React, { createContext, useState } from 'react'

export  const PostContext =  createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <PostContext.Provider value={[theme, setTheme]}>
           {props.children}
      </PostContext.Provider>

    </div>
  )
}

export default ThemeContext