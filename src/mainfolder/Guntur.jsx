import React from "react";
import "./hmf.css"
import { gunture } from "./data/guntur";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import { Link } from "react-router-dom";

const Guntur = () => {
    window.scrollTo(0, 0);
  return (
    <>
    <div className="container">
        <Headerpage/>
      <h2 className="title">Guntur Hospitals - Details</h2>
      <div className="grid">
        {gunture.map((hospital) => (
          <div key={hospital.id} className="card">
            <Link to={`/guntur/${hospital.id}`}>
            <img src={hospital.himg} alt={hospital.hname} className="hospital-img" />
            </Link>
           
            <h3 className="hospital-name">{hospital.hname}</h3>
            <ul className="service-list">
              {hospital.tservices.slice(0, 3).map((service, index) => (
                <li key={index} className="service-item1">
                  <span className="service-name1">{service.service}</span>
                  <span className="service-cost">₹{service.cost}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
    <Footerpage/>
    </>
  );
};

export default Guntur;
