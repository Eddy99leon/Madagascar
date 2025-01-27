import React from 'react'
import rova from '../assets/rova.jpg'
import people3 from '../assets/people3.jpg'
import sakalava from '../assets/sakalava.jpg'

const Hero = () => {
  return (
    <section className="bg-[url('./assets/mada4.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className='bg-black/60 w-full h-screen'>
        <div className='max-w-5xl mx-auto px-4 pt-60 grid grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <h1 className='font-bold text-6xl'>
              Explorez la magie de <span className='text-Vert'>Madagascar</span>.
            </h1>
            <h3 className='text-lg mt-2 font-medium'>
              Plongez au cœur d'une île aux paysages époustouflants, 
              une biodiversité unique et une culture vibrante. L'aventure vous attend !
            </h3>
            <div className='mt-3 flex items-center gap-10'>
              <button className='bg-Rouge py-3 px-8 text-Noir font-semibold rounded-md mt-2 md:mt-4 text-sm md:text-base'>
                Login
              </button>
              <button className='border py-3 px-8 text-gray-200 font-semibold rounded-md mt-2 md:mt-4 text-sm md:text-base'>
                Gallery
              </button>
            </div>
          </div>
          <div className='col-span-1 grid grid-cols-2 gap-4'>
            <div className='row-span-2 py-4'>
              <img 
                src={people3} 
                alt="rova" 
                className='w-auto h-full object-cover rounded-lg shadow-gray-300 shadow' 
              />
            </div>
            <div>
              <img 
                src={rova} 
                alt="aloalo" 
                className='w-full h-full object-cover rounded-lg shadow-gray-300 shadow' 
              />
            </div>
            <div>
              <img 
                src={sakalava} 
                alt="artisanat" 
                className='w-full h-full object-cover rounded-lg shadow-gray-300 shadow'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero