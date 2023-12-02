import React from 'react'
import madagascar from "../assets/madagascar.png"
import { Link } from 'react-router-dom'
import { PiFacebookLogoDuotone, PiGithubLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi'

const Footer = () => {
  return (
    <section className="bg-Noir">
        <div className='max-w-5xl mx-auto px-3 pt-16 pb-12 border-t border-gray-800 flex sm:block justify-center'>

            <div className='sm:flex justify-between'>
                <div className='mb-6 sm:mb-0'>
                  <div className='flex items-center mb-3'>
                    <img src={madagascar} alt="logo" className='w-10 mr-1' />
                    <h1 className='text-2xl font-medium'>
                      Mada
                    </h1>
                  </div>
                  <p className='max-w-[350px] text-gray-400 text-xs sm:text-sm text-justify'>
                    Stay updated on our news to not miss out on the treasures of this fascinating island.
                     Join our passionate community to share discoveries. Together, let's explore the wonders of Madagascar
                     and create memories that will last a lifetime.
                  </p>
                </div>

                <div className='flex items-center gap-14'>
                  <div>
                    <h1 className='text-Rouge font-medium text-lg'>
                      Quick link
                    </h1>
                    <ul className='flex flex-col text-gray-400 text-sm sm:text-base'>
                      <Link to="/Madagascar/" className='hover:text-gray-50'>Home</Link>
                      <Link to="/Madagascar/gallery" className='hover:text-gray-50'>Gallery</Link>
                      <Link to="/Madagascar/contact" className='hover:text-gray-50'>Contact</Link>
                    </ul>
                  </div>
                  <div>
                    <h1 className='text-Rouge font-medium text-lg'>
                      More
                    </h1>
                    <ul className='flex flex-col text-gray-400 text-sm sm:text-base'>
                      <Link className='hover:text-gray-50'>Blog</Link>
                      <Link className='hover:text-gray-50'>Cookies</Link>
                      <Link className='hover:text-gray-50'>Confidentiality</Link>
                    </ul>
                  </div>
                </div>
            </div>

        </div>

        <div className='border-t border-gray-800'>
          <div className='max-w-5xl mx-auto px-3 py-3 flex justify-center md:justify-between items-center'>
              <div className='font-medium text-xs sm:text-sm md:text-base'>
                  © Coder with 🤍❤️💚 by<span className='font-semibold'> Eddy Andriamisaina.</span>
              </div>
              <div className='hidden md:flex items-center space-x-3 text-2xl md:text-3xl'>
                <PiFacebookLogoDuotone className='cursor-pointer' />
                <PiLinkedinLogoDuotone className='cursor-pointer text-Rouge' />
                <PiGithubLogoDuotone className='cursor-pointer text-Vert' />
              </div>
          </div>
        </div>
    </section>
  )
}

export default Footer