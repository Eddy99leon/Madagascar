import React from 'react'

const Overview = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-24 pb-32'>
            <h2 className='uppercase text-center font-semibold text-Rouge text-xs sm:text-sm md:text-base'>
                Madagascar
            </h2>
            <h1 className='text-center font-semibold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16'>
                People Overview
            </h1>
            <div className='grid grid-cols-4 grid-rows-3 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] gap-2 md:gap-4'>
                <div className="bg-[url('./assets/people1.jpg')] w-full h-full bg-center bg-no-repeat bg-cover rounded-md">
                    <div className='w-full h-full bg-black/40' />
                </div>
                <div className="bg-[url('./assets/people2.jpg')] w-full h-full bg-center bg-no-repeat bg-cover rounded-md">
                    <div className='w-full h-full bg-black/40' />
                </div>
                <div className="bg-[url('./assets/people6.jpg')] w-full h-full bg-center bg-no-repeat bg-cover rounded-md col-span-2 row-span-2">
                    <div className='w-full h-full bg-black/40' />
                </div>
                <div className="bg-[url('./assets/people4.jpg')] w-full h-full bg-center bg-no-repeat bg-cover rounded-md col-span-2 row-span-2">
                    <div className='w-full h-full bg-black/40' />
                </div>
                <div className="bg-[url('./assets/people5.jpg')] w-full h-full bg-center bg-no-repeat bg-cover rounded-md">
                    <div className='w-full h-full bg-black/40' />
                </div>
                <div className="bg-[url('./assets/people3.jpg')] w-full h-full  bg-no-repeat bg-cover bg-left-top rounded-md">
                    <div className='w-full h-full bg-black/40' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Overview