import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./hmf.css"
import Footerpage from "./Footerpage";
import Headerpage from "./Headerpage";
import Search from "./Search";
const ComparePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hospitals = location.state?.hospitals || [];

  console.log("Hospitals received in ComparePage:", hospitals); // Debugging line

  // Redirect if no hospitals are selected
  useEffect(() => {
    window.scrollTo(0, 0);
    if (hospitals.length < 2) {
      alert("Please select at least two hospitals to compare.");
      navigate("/");
    }
  }, [hospitals.length, navigate]); // Ensuring this runs only when needed

  return (
    <div className="compare-page">
        <Search/>
      <h1 className="h11">Hospital Comparison</h1>
      <div className="comparison-container">
        {hospitals.length >= 2 ? (
          hospitals.map((hospital, index) => (
            <div key={hospital.id || index} className="hospital-card">
              <img 
                src={hospital.himg || "default-image.jpg"} 
                alt={hospital.hname || "Unknown Hospital"} 
                className="hospital-img" 
              />
              <h2 className="h211">{hospital.hname || "Unnamed Hospital"}</h2>
              <p><strong>Services:</strong>{hospital.tservices.map((i)=>{
                return(
                  <div className="ppdata11">
                    <p>{i.service} -  ₹{i.cost} - {i.dtname}</p><hr />
                  </div>
                )
              })}
              
              
              
              </p>

              <p><strong>Insurance:</strong> {hospital.insurance.map((i)=>{
                return(
                  <div className="ppdata11">
                    <p>{i.tname} - {i.incname} </p><hr />
                  </div>
                )
              })}</p>
            </div>
          ))
        ) : (
          <p>No hospitals selected.</p>
        )}
      </div>
      <Footerpage/>
    </div>
  );
};

export default ComparePage;
