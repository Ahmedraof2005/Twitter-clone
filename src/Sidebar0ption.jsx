import React from 'react'
import './App.css';


const Sidebar0ption = ({Icon , text , active}) => {
  return (
    <div className={`sidbar0ption ${active && 'sidebar0ption--active' }`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default Sidebar0ption