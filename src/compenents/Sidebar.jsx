import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { IoMdArrowForward } from "react-icons/io"
import { Link, NavLink } from 'react-router-dom';
import madagascar from "../assets/madagascar.png"
import { PiFacebookLogoDuotone, PiGithubLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi';

const Sidebar = () => {
  
  const {isOpen, handleClose} = useContext(SidebarContext)

  return (
    <div 
      className={`
        ${isOpen ? "opacity-100" : "opacity-0"}
         fixed z-40 top-0 w-full h-full bg-black/50 transition-all pointer-events-none
      `}
    >

      <div 
        className={`
        ${isOpen ? "right-0" : "-right-full"}
         fixed top-0 h-full w-full sm:w-[50vw] lg:w-[30vw] px-4 bg-Noir text-gray-200 transition-all duration-400 pointer-events-auto
      `}
      >
        <div className='py-5'>
          <IoMdArrowForward onClick={handleClose} className="text-2xl cursor-pointer" />
        </div>

        <div className='flex items-center justify-center mb-6'>
          <img src={madagascar} alt="logo" className='w-10 mr-1' />
          <h1 className='text-2xl font-medium'>
            Mada
          </h1>
        </div>

        <ul className="flex flex-col mx-auto text-center space-y-4 font-medium text-lg">
            <NavLink 
                to='/' 
                className='Nav-link' 
                onClick={handleClose}
            >
                Home
            </NavLink>
            <NavLink 
                to='/gallery' 
                className='Nav-link' 
                onClick={handleClose}
            >
                Gallery
            </NavLink>
            <NavLink 
                to='/contact' 
                className='Nav-link' 
                onClick={handleClose}
            >
                Contact
            </NavLink>
        </ul>

        <div className="flex items-center justify-center gap-4 mt-12 dark:text-gray-100 text-gray-900 transition-all duration-700">
          <a 
            className=" hover:transform hover:scale-95"  
            href="https://web.facebook.com/profile.php?id=100094137014767" 
            target='_blank'
          >
            <PiFacebookLogoDuotone className='text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="#lien"
            target='_blank'
          >
            <PiLinkedinLogoDuotone className='cursor-pointer text-Rouge text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="https://github.com/Eddy99leon"
            target='_blank'
          >
            <PiGithubLogoDuotone className='cursor-pointer text-Vert text-3xl' />
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar