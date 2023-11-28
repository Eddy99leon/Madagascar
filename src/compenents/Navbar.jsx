import React from 'react'
import madagascar from "../assets/madagascar.png"
import { Link, NavLink } from 'react-router-dom'
import { PiFacebookLogoDuotone, PiTwitterLogoDuotone, PiYoutubeLogoDuotone } from 'react-icons/pi'

const Navbar = () => {
  return (
    <section className='bg-Noir w-full fixed border-b border-gray-800 z-10'>
      <nav className='max-w-5xl flex items-center justify-between mx-auto px-3 py-4'>
        <Link to='/' className='flex items-center'>
          <img src={madagascar} alt="logo" className='w-10 mr-1' />
          <h1 className='text-2xl font-medium'>
            Mada
          </h1>
        </Link>
        <ul className='text-md space-x-5 font-semibold'>
          <NavLink to='/' className='Nav-link'>
            Home
          </NavLink>
          <NavLink to='/gallery' className='Nav-link'>
            Gallery
          </NavLink>
          <NavLink to='/contact' className='Nav-link'>
            Contact
          </NavLink>
        </ul>
        <div className='flex items-center space-x-2 text-3xl'>
          <PiFacebookLogoDuotone className='cursor-pointer' />
          <PiTwitterLogoDuotone className='cursor-pointer text-Rouge' />
          <PiYoutubeLogoDuotone className='cursor-pointer text-Vert' />
        </div>
      </nav>
    </section>
  )
}

export default Navbar