import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Shimmer from './Shimmer'
const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Shimmer />
        <Outlet />
    </div>
  )
}

export default Body