import React from 'react'

const Cultural = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-4 pb-32'>
            <h2 className='uppercase text-center font-semibold text-Rouge text-xs sm:text-sm md:text-base'>
                Madagascar
            </h2>
            <h1 className='text-center font-semibold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16'>
                Cultural Heritage
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-3 gap-y-10 md:gap-y-16'>

                <div className=''>
                    <div>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl text-Vert font-medium'>
                            Special offers for couple
                        </h2>
                        <p className='mb-3 text-gray-400 text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div className="bg-[url('./assets/heritage6.jpg')] w-full h-[380px] sm:h-[440px] bg-no-repeat bg-cover bg-top">
                        <div className='bg-black/40 w-full h-full'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="bg-[url('./assets/heritage1.jpg')] w-full h-[380px] sm:h-[440px] bg-no-repeat bg-cover bg-top mb-0 md:mb-3">
                        <div className='bg-black/40 w-full h-full'/>
                    </div>
                    <div className='order-first md:order-none mb-3 md:mb-0'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl text-Vert font-medium'>
                            Special offers for couple
                        </h2>
                        <p className='text-gray-400 text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl text-Vert font-medium'>
                            Special offers for couple
                        </h2>
                        <p className='mb-3 text-gray-400 text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div className="bg-[url('./assets/heritage2.jpg')] w-full h-[380px] sm:h-[440px] bg-no-repeat bg-cover bg-top">
                        <div className='bg-black/20 w-full h-full'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="bg-[url('./assets/heritage5.jpg')] w-full h-[380px] sm:h-[440px] bg-no-repeat bg-cover bg-top mb-0 md:mb-3">
                        <div className='bg-black/20 w-full h-full'/>
                    </div>
                    <div className='order-first md:order-none mb-3 md:mb-0'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl text-Vert font-medium'>
                            Special offers for couple
                        </h2>
                        <p className='text-gray-400 text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        
    </section>
  )
}

export default Cultural