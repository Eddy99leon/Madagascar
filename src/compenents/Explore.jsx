import React from 'react'

const Explore = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pb-6'>
            <h1 className='text-center text-Rouge text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-3'>
                Explore
            </h1>
            <p className='text-center text-gray-400 font-medium mb-8 text-xs sm:text-sm md:text-base'>
                Lorem ipsum dolor sit consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amettetur adipisicing elit. Illo!
                <br />
                ipsum dolor sit amet consectetur.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3 justify-items-center'>
                <div className="bg-[url('./assets/explore2.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-lg'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>West Mountains</h2>
                            <p>Nepal</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore3.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-lg'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>West Mountains</h2>
                            <p>Nepal</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore6.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-lg'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>West Mountains</h2>
                            <p>Nepal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore