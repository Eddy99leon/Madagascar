import React from 'react'
import { BiSearch } from 'react-icons/bi'
import CardGallery from '../compenents/CardGallery'
import Gallerys from '../assets/data'

const Gallery = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-28 pb-32'>
          <div className='relative mx-auto flex justify-center items-center w-[280px] h-[40px] bg-gray-900 rounded-md overflow-hidden mb-10'>
            <input 
              type="text" 
              className='w-full h-full border-none outline-none bg-gray-900 pl-10 placeholder-gray-400 font-medium'
              placeholder='Search..' 
            />
            <BiSearch className='absolute top-2 left-2 text-gray-300 text-2xl' />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {Gallerys.map((gallery) => {
              return <CardGallery gallery={gallery} key={gallery.id} />
            })}
          </div>
        </div>
    </section>
  )
}

export default Gallery