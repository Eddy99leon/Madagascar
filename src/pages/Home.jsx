import React from 'react'
import Hero from '../compenents/Hero'
import Explore from '../compenents/Explore'
import Overview from '../compenents/Overview'
import Dream from '../compenents/Dream'
import City from '../compenents/City'
import Cultural from '../compenents/Cultural'

const Home = () => {
  return (
    <section>
      <Hero />
      <Explore />
      <Overview />
      <Dream />
      <City />
      <Cultural />
    </section>
  )
}

export default Home