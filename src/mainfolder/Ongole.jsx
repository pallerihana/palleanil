import React from "react";
import "./hmf.css"
import { ongolehosp } from "./data/ongole hosp";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import { Link } from "react-router-dom";

const Ongole = () => {
    window.scrollTo(0, 0);
  return (
    <>
    <div className="container">
        <Headerpage/>
      <h2 className="title">Ongole Hospitals - Details</h2>
      <div className="grid">
        {ongolehosp.map((hospital) => (
          <div key={hospital.id} className="card">
            <Link to={`/ongole/${hospital.id}`}>
            
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

export default Ongole;
