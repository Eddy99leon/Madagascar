import React from 'react'

const Contact = () => {
  return (
    <section className='bg-Noir'>
        <div className='max-w-5xl mx-auto px-3 pt-40 pb-32'>
            <div className='grid grid-cols-2 gap-8 justify-items-center'>

              {/* left block */}
              <div>
                  <div>
                    <h1 className='text-4xl text-Vert font-semibold'>
                      Just Say Hello !
                    </h1>
                    <p className='font-medium mb-6'>
                      Let us know more about you.
                    </p>
                  </div>
                  <div>
                    <div className='grid grid-cols-2 gap-4 mb-4'>
                      <input 
                        type="text" 
                        placeholder='First Name' 
                        className='p-3 bg-gray-800 placeholder-gray-300 font-medium outline-none border-none rounded-md' 
                      />
                      <input 
                        type="text" 
                        placeholder='Last Name' 
                        className='p-3 bg-gray-800 placeholder-gray-300 font-medium outline-none border-none rounded-md' 
                      />
                      <input 
                        type="email" 
                        placeholder='Mail' 
                        className='p-3 bg-gray-800 placeholder-gray-300 font-medium outline-none border-none rounded-md' 
                      />
                      <input 
                        type="text" 
                        placeholder='Phone' 
                        className='p-3 bg-gray-800 placeholder-gray-300 font-medium outline-none border-none rounded-md' 
                      />
                    </div>
                    <textarea 
                      className='w-full h-24 p-3 bg-gray-800 placeholder-gray-300 font-medium outline-none border-none rounded-md' 
                      placeholder='Message' 
                    />
                    <button className='bg-Rouge py-3 px-6 text-Noir font-semibold rounded-md mt-4'>
                      Submit
                    </button>
                  </div>
              </div>

              {/* right block */}
              <div>
                <h1 className='text-3xl text-Rouge font-medium mb-8'>
                    Contact
                    <br />
                    Information
                </h1>
                <div className='space-y-3'>
                    <p>
                      VT 05, Ambohipo
                      <br />
                      Antananarivo, 101
                      <br />
                      Madagascar
                    </p>
                    <p>
                      Call us:
                      <br />
                      +261 34 50 117 05
                    </p>
                    <p>
                      We are available from <span className='text-Vert font-medium'>Monday</span> - <span className='text-Vert font-medium'>Friday</span>
                      <br />
                      08:00 am - 05:00 pm
                    </p>
                </div>
                <div className='mt-8'>
                  <h1 className='text-3xl text-Rouge font-medium'>
                    Follow us
                  </h1>
                  <p className='space-x-3 font-medium'>
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>Youtube</span>
                  </p>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Contact