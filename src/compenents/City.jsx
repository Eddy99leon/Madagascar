import React from 'react'
import tsingy3 from '../assets/tsingy3.jpg'
import rova from '../assets/rova.jpg'
import isalo from '../assets/isalo.jpg'
import { PiMapPinDuotone } from 'react-icons/pi'

const City = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-24 pb-32'>
            <h2 className='uppercase text-center font-semibold text-Rouge text-xs sm:text-sm md:text-base'>
                Park of
            </h2>
            <h1 className='text-center font-semibold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16'>
                Attractions
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center'>
                <div className='max-w-[320px] border border-gray-800 shadow-sm shadow-gray-900'>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src={tsingy3} alt="park" className=' object-cover h-full' />
                    </div>
                    <div className='relative'>
                        <h2 className='absolute -top-[52px] left-4 flex items-center bg-Vert py-1 px-2 text-sm font-semibold text-Noir'>
                            <PiMapPinDuotone className="text-xl mr-1" />
                            Tsingy of Bemaraha
                        </h2>
                        <p className='mt-10 mx-3 mb-4 text-sm text-justify font-medium text-gray-400'>
                            The Tsingy de Bemaraha Integral Nature Reserve is a protected area in Western Madagascar, 
                            listed as a UNESCO World Heritage Site since 1990.
                        </p>
                    </div>
                </div>
                <div className='max-w-[320px] border border-gray-800 shadow-sm shadow-gray-900'>
                    <div className='w-full h-[200px] overflow-hidden object-cover'>
                        <img src={rova} alt="park" className=' object-cover h-full' />
                    </div>
                    <div className='relative'>
                        <h2 className='absolute -top-[52px] left-4 flex items-center bg-Vert py-1 px-2 text-sm font-semibold text-Noir'>
                            <PiMapPinDuotone className="text-xl mr-1" />
                            Rova Manjakamiadana
                        </h2>
                        <p className='mt-10 mx-3 mb-4 text-sm text-justify font-medium text-gray-400'>
                            The Rova of Manjakandriana is a fortified royal complex located
                             in the center of the Upper Town of Antananarivo, the capital of Madagascar. 
                        </p>
                    </div>
                </div>
                <div className='max-w-[320px] border border-gray-800 shadow-sm shadow-gray-900'>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src={isalo} alt="park" className=' object-cover' />
                    </div>
                    <div className='relative'>
                        <h2 className='absolute -top-[52px] left-4 flex items-center bg-Vert py-1 px-2 text-sm font-semibold text-Noir'>
                            <PiMapPinDuotone className="text-xl mr-1" />
                            National park Isalo
                        </h2>
                        <p className='mt-10 mx-3 mb-4 text-sm text-justify font-medium text-gray-400'>
                        The Isalo National Park is a protected area in Madagascar, declared a national park in 1999.
                         The park preserves a portion of a mountain massif sharing its name.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default City