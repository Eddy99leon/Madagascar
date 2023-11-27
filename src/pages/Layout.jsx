import React from 'react'
import Navbar from '../compenents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compenents/Footer'

const Layout = () => {
  return (
    <div className='font-Montserrat text-gray-300'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout