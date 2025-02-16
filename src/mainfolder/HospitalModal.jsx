import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hmf.css"
import { maindat } from "./data/maindata";


const fmaindata = maindat.slice(0,20)

const HospitalModal = ({ onClose }) => {
  const [selectedHospitals, setSelectedHospitals] = useState([]);
  const navigate = useNavigate();


  const handleSelect = (hospital) => {
    if (selectedHospitals.includes(hospital)) {
      setSelectedHospitals(selectedHospitals.filter((h) => h !== hospital));
    } else if (selectedHospitals.length < 4) {
      setSelectedHospitals([...selectedHospitals, hospital]);
    }
  };

  const handleCompare = () => {
    if (selectedHospitals.length >= 2) {
      navigate("/compare", { state: { hospitals: selectedHospitals } });
    } else {
      alert("Select at least 2 hospitals to compare.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Hospitals to Compare</h2>
        <button onClick={onClose} className="close-btn">X</button>
        <div className="hospital-list">
          {fmaindata.map((hospital, index) => (
            <div key={index} className="hospital-box">
              <img src={hospital.himg} alt={hospital.hname} className="hospital-img" />
              <h3>{hospital.hname}</h3>
              <p>
  {hospital.tservices.map((i, index) => (
    <div  key={index}>
      <p className="costfind" >{i.service}       : {i.cost}</p>
    </div>
  ))}
</p>
              <input className="checkbox"
                type="checkbox"
                checked={selectedHospitals.includes(hospital)}
                onChange={() => handleSelect(hospital)}
              />
            </div>
          ))}
        </div>
        <button className="compbtn" onClick={handleCompare} disabled={selectedHospitals.length < 2}>
          Compare {selectedHospitals.length} Selected
        </button>
      </div>
    </div>
  );
};

export default HospitalModal;
