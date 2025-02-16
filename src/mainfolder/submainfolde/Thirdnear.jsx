import React from 'react'

import { vijayavada } from '../data/vijaya';
import { FaMapMarkerAlt } from "react-icons/fa";
import "./fst.css"
import { Link } from 'react-router-dom';

const minongole = vijayavada.slice(0,5)


const Thirdnear = () => {
  
  return (
    <>
    
      
      <div className="divong1">
        <div className="divong11">
        <h1 > <FaMapMarkerAlt size={24} color="red" /> Vijayawada</h1>
        <div className="viewall">
        <Link to={"/vijayawada"} className='viewall11'>
        <strong>View all ⮞</strong>
        </Link>
        </div>
        </div>
        
        <div className="boxcreate">
      
      {minongole.map((ongole)=>{
        
        return(
          

          
            <div  className='boxediting'>
               
              
              <div className="ongoleimgpart">
                <Link to={`/vijayawada/${ongole.id}`}>
                <img src={ongole.himg} alt={ongole.hname} />
                </Link>
              
            </div>
            <div className="honame">
              <p>{ongole.hname}</p>
            </div>
            <div className="doctorname">
              <p>{ongole.dname1}</p>
            </div>
            <div className="availabletile">
              <p>24/7 Available</p>
            </div>
            <div className="ongbutton">
              <button>More Detailes</button>
            </div>
            </div>
          
        )
      })}
      </div>
        
      </div>
      </>
      
    
  )
}

export default Thirdnear
