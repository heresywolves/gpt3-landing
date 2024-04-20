import { useState } from 'react'
import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Preloader } from './containers';
import { CTA, Brand, Navbar } from './components';
import Favicon from 'react-favicon';
import logo from './assets/logo.svg'

function App() {

  return (
    <div className='App'>
      {/* <Preloader /> */}
      <Favicon url={logo} />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
