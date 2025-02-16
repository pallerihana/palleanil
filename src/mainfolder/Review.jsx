import React from 'react'
import { names } from './names'

const Review = () => {
  return (
    <div>
        {names.map((i)=>{
            return(
                <div>
                    <div className="logoimg">
                        <img src={i.img} alt={i.name}/>
                    </div>
                    <div className="logonames">
                        <strong>{i.name}</strong>
                        <p>{i.comment}</p>
                    </div>
                </div>
            )
        })}
      
    </div>
  )
}

export default Review
