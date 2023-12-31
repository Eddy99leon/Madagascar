import React from 'react'

const Explore = () => {
  return (
    <section className='bg-Noir' id='explore'>
        <div className='max-w-5xl mx-auto px-3 pt-20 pb-6'>
            <h1 className='text-center text-Rouge text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-3'>
                Explore
            </h1>
            <p className='text-center text-gray-400 font-medium mb-8 text-xs sm:text-sm md:text-base'>
                Experience the wonders of Madagascar:
                <br />
                discover unique ecosystems, captivating landscapes,
                <br />
                and remarkable natural beauty.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3 justify-items-center'>
                <div className="bg-[url('./assets/explore2.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-md border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-md'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>Wild Kingdom</h2>
                            <p>Treasures</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore3.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-md border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-md'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>Botanical Paradise</h2>
                            <p>Diversity</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/explore6.jpg')] w-[300px] h-[400px] bg-center bg-no-repeat bg-cover rounded-md border border-gray-950">
                    <div className='text-center w-full h-full flex items-end justify-center bg-gradient-to-t from-gray-950 to-transparent pb-4 rounded-md'>
                        <div>
                            <h2 className='text-lg font-semibold text-Vert'>Marine Mysteries</h2>
                            <p>Spectacle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore