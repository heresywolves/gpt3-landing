import React, { useRef, useState } from 'react'
import './preloader.css'
import tubeSpinner from '../../assets/tube-spinner.svg'


function Preloader() {
  const [activeLoader, setActiveLoader] = useState(true);

  const handleLoadContent = () => {
    setActiveLoader(false);
  }

  window.addEventListener ("load", handleLoadContent);

  return (
    (activeLoader && (
      <div className='preloader gradient__bg'>
        <img src={tubeSpinner} alt="loader spinner" className='preloader__image'/>
      </div>
    ))
  )
}

export default Preloader
