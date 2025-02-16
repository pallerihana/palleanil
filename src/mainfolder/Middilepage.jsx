import React from 'react'
import Firstnear from './submainfolde/Firstnear'
import Secondnear from './submainfolde/Secondnear'
import Thirdnear from './submainfolde/Thirdnear'
import "./hmf.css"
import CompareButton from './CompareButton'


const Middilepage = () => {
  return (
    <div className='bgclr'>
      <h1>Near Places</h1>
     <div className="comh1">
     
     <CompareButton/>
     </div>
      <Firstnear/>
      <Secondnear/>
      <Thirdnear/>

      
    </div>
  )
}

export default Middilepage
