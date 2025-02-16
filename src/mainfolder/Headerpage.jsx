import React, { useState } from "react";
import "./hmf.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import { Link } from "react-router-dom";


const servicesList = [
  "Pregnancy & Childbirth Services", "Cardiology (Heart Care)", "Orthopedics (Bone & Joint Care)",
  "Oncology (Cancer Treatment)", "Neurology & Neurosurgery", "Diagnostic Imaging & Radiology",
  "Gastroenterology (Digestive Health)", "Pulmonology (Lungs & Respiratory Care)", "Nephrology (Kidney Care)",
  "Urology", "Endocrinology (Hormone & Diabetes Care)", "Dermatology (Skin Care)",
  "Physical Therapy & Rehabilitation", "Pediatrics (Child Healthcare)", "Rheumatology (Joint & Autoimmune Diseases)",
  "Ophthalmology (Eye Care)", "Otolaryngology (ENT – Ear, Nose, Throat)", "Dental & Oral Surgery",
  "Hematology (Blood Disorders)", "Transplant Services (Organ & Tissue)"
];

const API_KEY = "8bea09bdb4f249b38e90dbebd60c0e60"; // Replace with your OpenCage API key

const Headerpage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [location, setLocation] = useState("Your Location");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("default"); // "default", "login", "signup"

  // Function to Get User's Location and Convert to City Name
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Reverse Geocoding API Call
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
            );
            const data = await response.json();
            
            if (data.results.length > 0) {
              const city = data.results[0].components.city || 
                           data.results[0].components.town || 
                           data.results[0].components.village || 
                           "Unknown Location";
              setLocation(city);
              setIsLocationModalOpen(false); // Close modal after selecting
            } else {
              setLocation("City Not Found");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Error Fetching Location");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location Permission Denied");
        }
      );
    } else {
      setLocation("Geolocation Not Supported");
    }
  };

  const filteredServices = servicesList.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="top1">
      <div className="top">
      <div className="topright">
        <Link to={"/"} className="maintitle">
        <h1 >Price AI vision</h1>
        </Link>
      </div>
      <nav className="topleft">
        <ul>
          {/* Location Button with Click Event */}
          <li onClick={() => setIsLocationModalOpen(!isLocationModalOpen)} className="location-btn">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            {location}
          </li>

          {/* Small Modal for Location Selection */}
          {isLocationModalOpen && (
            <div className="location-modal">
              <input
                type="text"
                placeholder="Enter city name..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
              />
              <p className="current-location-btn" onClick={() => { setLocation(searchCity); setIsLocationModalOpen(false); }}>
                Set Location
              </p>
              <p  className="current-location-btn"  onClick={getLocation}>
                📍 Get Current Location
              </p>
            </div>
          )}
          <Link to={"/vendor"} className="vendorli">
          <li>Become a vendor</li>
          </Link>
         

          {/* Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Services
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {/* Search Bar */}
                <div className="search-box">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {/* Services Grid */}
                <div className="services-grid">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                      <div key={index} className="service-item">{service}</div>
                    ))
                  ) : (
                    <div className="service-item">No results found</div>
                  )}
                </div>
              </div>
            )}
          </li>

          {/* Login/Signup Hover Modal */}
          <li
            onMouseEnter={() => setIsAuthModalOpen(true)}
            onMouseLeave={() => setIsAuthModalOpen(false)}
          >
            Login / Signup
            {isAuthModalOpen && (
              <div className="auth-modal">
                <p>Login for Best Experience</p>
                
                {authMode === "default" ? (
                  <>
                    <p  className="current-location-btn" onClick={() => setAuthMode("login")}>Login</p>
                    <p className="current-location-btn" onClick={() => setAuthMode("signup")}>Signup</p>
                  </>
                ) : (
                  <>
                    {authMode === "login" && <button>Login</button>}
                    {authMode === "signup" && <button>Signup</button>}
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
        
      </nav>
      </div>
      
     
      <Search/>
      
    </header>
    
  );
};

export default Headerpage;
