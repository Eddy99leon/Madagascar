import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('./assets/mada4.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className='flex justify-center bg-black/60 w-full h-screen'>
        <div className='pt-56'>
          <h2 className='text-2xl font-bold text-center text-black'>
            Welcome to:
          </h2>
          <h1 className=' font-bold text-[150px] leading-[100px] text-Vert'>
            Madagascar
          </h1>
          <p className='mt-10 text-center font-semibold'>
            Lorem ipsum dolor sit amet consectetur dolorem.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='flex justify-center mt-6'>
            <button className='px-6 py-3 bg-Rouge text-Noir font-semibold rounded-md'>
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero