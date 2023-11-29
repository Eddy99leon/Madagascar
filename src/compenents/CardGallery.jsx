import React from 'react'
import tsingy3 from '../assets/tsingy3.jpg'
import { PiMapPinDuotone } from 'react-icons/pi'

const CardGallery = () => {
  return (
    <div className='w-[300px] border border-gray-950 shadow-sm shadow-gray-900 rounded-sm'>
        <div className='w-full h-[200px] overflow-hidden'>
            <img src={tsingy3} alt="park" className=' object-cover h-full' />
        </div>
        <div className='mx-3 pt-6 pb-3'>
            <h1 className='font-medium text-Vert mb-2'>
                ✨ Lorem ipsum dolor sit amet.
            </h1>
            <p className='text-sm font-medium text-gray-500 text-justify mb-4'>
                Lorem, ipsum dolor sit amet ctetur.
                orem, ipsum dolor sit amet constur
                Lrem, ipsum dolor sit amet consect.
            </p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <PiMapPinDuotone className="text-lg text-gray-400" />
                    <span className='font-medium text-gray-300 text-sm'>
                        Mahanjanga
                    </span>
                </div>
                <div>
                    <button className='text-sm text-Rouge font-semibold py-1 px-2 bg-gray-950 rounded-sm'>
                        View details
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardGallery