import React from 'react'
import './App.css'
import About from './components/about/About'
import Advisors from './components/advisors/Advisors'
import Banner from './components/banner/Banner'
import Home from './components/home/Home'
import Reviews from './components/reviews/Reviews'
import Services from './components/services/Services'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Banner />
        <Home />
        <Reviews />
        <About />
        <Advisors />
        <Services />
      </main>
    </>
  )
}

export default App
