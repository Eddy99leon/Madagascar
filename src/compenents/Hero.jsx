import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('./assets/mada4.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className='flex justify-center bg-black/60 w-full h-screen'>
        <div className='pt-44'>
          <h2 className='text-2xl font-bold text-center mb-8 text-black'>
            Welcome:
          </h2>
          <h1 className='font-bloom font-medium text-[200px] leading-[100px] text-Vert'>
            Madagascar
          </h1>
          <p className='mt-16 text-center text-lg font-semibold'>
            Lorem ipsum dolor sit amet consectetur dolorem.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='flex justify-center items-center mt-4'>
            <button className='bg-Rouge px-7 py-3 text-black font-semibold rounded-lg'>
              Visite
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero