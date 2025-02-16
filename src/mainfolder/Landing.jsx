import React from 'react'
import Headerpage from './Headerpage'

import Footerpage from './Footerpage'
import Middilepage from './Middilepage'
import "./hmf.css"


const Landing = () => {
  return (
    <div className='hmf11'>
      <Headerpage/>
      
      <Middilepage/>

      <Footerpage/>
    </div>
  )
}

export default Landing
