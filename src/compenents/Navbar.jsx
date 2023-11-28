import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import madagascar from "../assets/madagascar.png"
import { Link, NavLink } from 'react-router-dom'
import { PiFacebookLogoDuotone, PiTwitterLogoDuotone, PiYoutubeLogoDuotone } from 'react-icons/pi'
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {

  const {isOpen, setIsOpen} = useContext(SidebarContext);

  return (
    <section className='bg-Noir w-full fixed border-b border-gray-800 z-10'>
      <nav className='max-w-5xl flex items-center justify-between mx-auto px-3 py-4'>
        <Link to='/' className='flex items-center'>
          <img src={madagascar} alt="logo" className='w-10 mr-1' />
          <h1 className='text-2xl font-medium'>
            Mada
          </h1>
        </Link>
        <ul className='hidden md:block text-md space-x-5 font-semibold'>
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
        <div className='hidden md:flex items-center space-x-2 text-3xl'>
          <PiFacebookLogoDuotone className='cursor-pointer' />
          <PiTwitterLogoDuotone className='cursor-pointer text-Rouge' />
          <PiYoutubeLogoDuotone className='cursor-pointer text-Vert' />
        </div>
        <div 
            onClick={()=> setIsOpen(!isOpen)}
            className=" hover:text-Rouge cursor-pointer md:hidden"
        >
            <BiMenu className='text-3xl' />
        </div>
      </nav>
    </section>
  )
}

export default Navbar