import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('./assets/mada4.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className='flex justify-center bg-black/60 w-full h-screen'>
        <div className='pt-56'>
          <h2 className='text-lg sm:text-2xl md:text-3xl font-bold text-center text-black'>
            Welcome to:
          </h2>
          <h1 className='font-bold text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px]  text-Vert text-center'>
            Madagascar
          </h1>
          <p className=' text-center font-semibold text-xs sm:text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur dolorem.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='flex justify-center mt-6'>
            <a href="#explore">
              <button className='px-6 py-3 bg-Rouge text-Noir font-semibold text-xs sm:text-sm md:text-base rounded-md'>
                Let's go 😀
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero