import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Search from '../components/Search'
import Service from '../components/Service'
import Modules from '../components/Modules'
import Collabrate from '../components/Collabrate'


const page = () => {
  return (
    <div>
      <Navbar />
      <Team />
      <Search />
      <Service />
      <Modules />
      <Collabrate />
      <Footer />

    </div>
  )
}

export default page