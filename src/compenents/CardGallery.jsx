import React from 'react'
import { PiMapPinDuotone } from 'react-icons/pi'

const CardGallery = ({ gallery }) => {
  return (
    <div className='max-w-[360px] border border-gray-800 shadow-sm shadow-gray-900 rounded-sm'>
        <div className='w-full h-[200px] overflow-hidden'>
            {gallery && <img src={gallery.picture} alt="park" className=' object-cover h-full w-full' /> }
        </div>
        <div className='mx-3 pt-6 pb-3'>
            <div className='mb-4'>
                <h1 className='font-medium text-Vert mb-2'>
                    ✨ {gallery.name}
                </h1>
                <p className='text-sm font-medium text-gray-500 text-justify min-h-[90px]'>
                    {gallery.description}
                </p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <PiMapPinDuotone className="text-lg text-gray-400" />
                    <span className='font-medium text-gray-300 text-sm'>
                        {gallery.location}
                    </span>
                </div>
                <div>
                    <button className='text-sm text-Rouge font-semibold py-1 px-2 bg-gray-900 rounded-sm'>
                        View details
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardGallery