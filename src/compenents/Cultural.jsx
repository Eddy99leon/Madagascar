import React from 'react'

const Cultural = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-4 pb-32'>
            <h2 className='uppercase text-center font-semibold text-Rouge'>
                Madagascar
            </h2>
            <h1 className='text-center font-semibold text-4xl mb-16'>
                Cultural Heritage
            </h1>
            <div className='grid grid-cols-2 gap-x-3 gap-y-16'>
                <div className='px-2'>
                    <h2 className='text-3xl text-Vert font-medium'>
                        Special offers for couple
                    </h2>
                    <p className='mb-3 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="bg-[url('./assets/heritage6.jpg')] w-full h-[440px] bg-no-repeat bg-cover bg-left-top">
                        <div className='bg-black/40 w-full h-full'/>
                    </div>
                </div>
                <div className='px-2'>
                    <div className="bg-[url('./assets/heritage1.jpg')] w-full h-[440px] bg-no-repeat bg-cover bg-left-top mb-3">
                        <div className='bg-black/40 w-full h-full'/>
                    </div>
                    <h2 className='text-3xl text-Vert font-medium'>
                        Special offers for couple
                    </h2>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className='px-2'>
                    <h2 className='text-3xl text-Vert font-medium'>
                        Special offers for couple
                    </h2>
                    <p className='mb-3 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="bg-[url('./assets/heritage2.jpg')] w-full h-[440px] bg-no-repeat bg-cover bg-left-top">
                        <div className='bg-black/20 w-full h-full'/>
                    </div>
                </div>
                <div className='px-2'>
                    <div className="bg-[url('./assets/heritage5.jpg')] w-full h-[440px] bg-no-repeat bg-cover bg-left-top mb-3">
                        <div className='bg-black/20 w-full h-full'/>
                    </div>
                    <h2 className='text-3xl text-Vert font-medium'>
                        Special offers for couple
                    </h2>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Cultural