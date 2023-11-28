import React from 'react'

const Explore = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 py-6'>
            <h1 className='text-center text-2xl font-semibold mb-3'>
                Explore the world with west compass
            </h1>
            <p className='text-center text-gray-400 font-medium mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo!
                <br />
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <div className="bg-[url('./assets/explore2.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>West Mountains</h2>
                            <p>Nepal</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore3.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>West Mountains</h2>
                            <p>Nepal</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore6.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-lg border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4'>
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