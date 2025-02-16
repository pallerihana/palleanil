import React from "react";
import { Link, useParams } from "react-router-dom";
import { maindat } from "./data/maindata";
import { FaHospital } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "./hmf.css"
import Footerpage from "./Footerpage";

import Search from "./Search";


const Maindata = () => {
  
  const { query } = useParams();
  const lowerQuery = query.toLowerCase();

  const filteredData = maindat.filter(
    (hospital) =>
      hospital.hname.toLowerCase().includes(lowerQuery) ||
      hospital.address.toLowerCase().includes(lowerQuery) ||
      hospital.tservices.some((service) =>
        service.service.toLowerCase().includes(lowerQuery)
      )
  );

  return (
    
    <div className="colorofsearch">
      <Search/>
    <h2 >
        Search Results for "{query}"
      </h2>
    <div  className="fildataalign">
      
      {filteredData.length === 0 ? (
        <p >No results found</p>
      ) : (
        
        filteredData.map((hospital) => (
          <div
            key={hospital.id}
            
          >
            <div className="imgdivion">

            
           <div className="imgdivision1">
            <Link to={`/result/${hospital.id}`}>
           <img
              src={hospital.himg}
              alt={hospital.hname}
              
            />
            </Link>
           </div>
            <div className="imgdivision11">
              <h2 ><FaHospital size={24} color="red"  />
                {hospital.hname}
              </h2>
              <p className="doct"><FaMapMarkerAlt size={24} color="red" /><strong>Address</strong>:{hospital.address}</p>
              <p className="doct"><FaUsers size={24} color="red" />
                <strong>Doctors:</strong>{hospital.dname.join(", ")}
              </p>
              <p ><FaCogs size={24} color="red"  />;
                <strong>Services:</strong><br />{" "}
                {hospital.tservices.map((s)=>{
                  return(
                    <div className="p_data">
                      <p>{s.service}:{s.cost}</p>
                      
                    </div>

                  )
                })}
                
              </p>
            </div>
            </div>
          </div>
        ))
      )}
    </div>
    <Footerpage/>
    </div>
  );
};

export default Maindata;
