import React, { useState } from "react";
import { maindat } from "./data/maindata"; // Ensure this path is correct
import { useParams, Link } from "react-router-dom";
import Search from "./Search";
import { FaMapMarkerAlt, FaUsers, FaPhone } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react"; // Corrected import
import emailjs from "emailjs-com"; // Corrected import
import "./hmf.css"; // Ensure this CSS file exists
import Footerpage from "./Footerpage";
import Rating from "./Rating";
import CompareButton from "./CompareButton";

import Firstnear from "./submainfolde/Firstnear";

const Singledata = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const hsp = maindat.find((i) => i.id === id);

  // Debugging: Check if hsp is defined
  if (!hsp) {
    return <div>Hospital not found. Please check the URL.</div>;
  }

  // State for modals and success popup
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showHouseServiceModal, setShowHouseServiceModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // State for form data
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    age: "",
    problem: "",
    contact: "",
    slotTime: "",
    upiId: "",
    qrCode: "",
    email: "",
  });

  const [houseServiceDetails, setHouseServiceDetails] = useState({
    name: "",
    age: "",
    address: "",
    landmark: "",
    areaName: "",
    contact: "",
    problem: "",
  });

  // Generate QR code for UPI payment
  const generateQRCode = () => {
    const { upiId } = appointmentDetails;
    if (upiId) {
      const qrCodeData = `upi://pay?pa=${upiId}&pn=RecipientName&mc=1234&tn=PaymentForAppointment`;
      setAppointmentDetails({
        ...appointmentDetails,
        qrCode: qrCodeData,
      });
    } else {
      alert("Please enter a valid UPI ID.");
    }
  };

  // Send booking confirmation email
  const sendBookingConfirmation = (details, isAppointment) => {
    if (!details.email) {
      alert("Please provide a valid email address.");
      return;
    }
  
    const templateParams = {
      to_name: details.name,
      to_email: details.email,  // Ensure email is collected in the form
      name: details.name,
      age: details.age,
      problem: details.problem,
      contact: details.contact,
      slotTime: details.slotTime || "Not provided",
      upiId: details.upiId || "N/A",
      address: details.address || "N/A",
      landmark: details.landmark || "N/A",
      areaName: details.areaName || "N/A",
    };
  
    const templateId = isAppointment
      ? "template_muq0uwq"  // Replace with actual Template ID from EmailJS
      : "YOUR_HOUSE_SERVICE_TEMPLATE_ID"; 
  
    emailjs
      .send(
        "service_pvgkpyl", // Replace with your actual EmailJS Service ID
        "template_muq0uwq",
        templateParams,
        "cvQb1RbiweDo5BR16" // Replace with your actual EmailJS User ID
      )
      .then(
        (response) => {
          console.log("✅ Email sent successfully!", response.status, response.text);
          alert("Confirmation email has been sent successfully!");
        },
        (error) => {
          console.error("❌ Failed to send email:", error);
          alert("Error sending email. Please try again.");
        }
      );
  };
  
  // Form submission handler for appointment
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", appointmentDetails);

    // Send booking confirmation email
    sendBookingConfirmation(appointmentDetails, true);

    setShowAppointmentModal(false);
    setSuccessMessage("Appointment Successful! Confirmation sent to your email.");
    setShowSuccessPopup(true);
  };

  // Form submission handler for house service
  const handleHouseServiceSubmit = (e) => {
    e.preventDefault();
    console.log("House Service Details:", houseServiceDetails);

    // Send booking confirmation email
    sendBookingConfirmation(houseServiceDetails, false);

    setShowHouseServiceModal(false);
    setSuccessMessage("House Service Booked Successfully! Confirmation sent to your email.");
    setShowSuccessPopup(true);
  };

  return (
    <div className="singlecolor">
      <div className="lrftright11">
        <div className="rightsearch">
          <div className="topright">
            <Link to={"/"} className="maintitle11">
              <h1>Price AI vision</h1>
            </Link>
          </div>
        </div>
        <div className="leftsearch">
          <Search />
        </div>
      </div>

      <div className="singlemainpage">
        <div className="singlepic">
          <img src={hsp.himg} alt="" />
        </div>
     
        <div className="singledata">
       
          
          <h2>{hsp.hname}  </h2>
          <div className="divnvt">
          <CompareButton/>
          </div>
         
         
          
          <p>
            <FaUsers size={24} color="#0a038f" /> {hsp.dname} 
          </p>
          <p>
            <FaMapMarkerAlt size={24} color="red" /> {hsp.address}
          </p>
          <p>
            <FaPhone size={24} color="#0a038f" /> {hsp.contact_no}
          </p>
          <hr />
          <h2>Services:</h2>
          <div className="tservices11">
            {hsp.tservices.map((i) => (
              <div key={i.service} className="tservices">
                <p><strong>Service:</strong> {i.service}</p>
                <p><strong>Cost:</strong> {i.cost}</p>
                <p><strong>Doctor:</strong> {i.dtname}</p>
              </div>
            ))}
          </div>
          <hr />
          <h2>Insurance:</h2>
          <div className="insurance">
            {hsp.insurance.map((i) => (
              <div key={i.tname} className="insurance11">
                <p><strong>Service:</strong> {i.tname}</p>
                <p><strong>Insurance:</strong> {i.incname}</p>
              </div>
            ))}
          </div>

          <div>
            <hr />
            
            <button className="bookbutton" onClick={() => setShowAppointmentModal(true)}>
              Book Appointment
            </button>
            <button className="bookbutton" onClick={() => setShowHouseServiceModal(true)}>
              Book House Service
            </button>
        
            
           
            
          </div>
         
           

           
        </div>
       
        
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="modal">
          <div className="modal-content1">
            <button className="close" onClick={() => setShowAppointmentModal(false)}>
              &times;
            </button>
            <h2>Book Appointment</h2>
            <form onSubmit={handleAppointmentSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={appointmentDetails.name}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, name: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={appointmentDetails.age}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, age: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Problem"
                value={appointmentDetails.problem}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, problem: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Contact Details"
                value={appointmentDetails.contact}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, contact: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={appointmentDetails.email}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, email: e.target.value })
                }
                required
              />
              <select
  value={appointmentDetails.slotTime}
  onChange={(e) =>
    setAppointmentDetails({ ...appointmentDetails, slotTime: e.target.value })
  }
  required
>
  <option value="">Select Time Slot</option>
  <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
  <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
  <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
  <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
</select>
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={appointmentDetails.upiId}
                onChange={(e) =>
                  setAppointmentDetails({ ...appointmentDetails, upiId: e.target.value })
                }
                required
              />
              <input type="submit" value={"Ganarate QR"} className="button"  onClick={generateQRCode} />
            
              {appointmentDetails.qrCode && (
                <div className="qr-code">
                  <QRCodeCanvas value={appointmentDetails.qrCode} size={150} />
                </div>
              )}
              <input type="submit" value={"submit"} className="button" />
            </form>
          </div>
        </div>
      )}

      {/* House Service Modal */}
      {showHouseServiceModal && (
        <div className="modal">
          <div className="modal-content1">
            <button className="close" onClick={() => setShowHouseServiceModal(false)}>
              &times;
            </button>
            <h2>Book House Service</h2>
            <form onSubmit={handleHouseServiceSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={houseServiceDetails.name}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, name: e.target.value })
                }
                required
              />
              {/* Success Popup */}
              {showSuccessPopup && (
  <>
    <div className="overlay" onClick={() => setShowSuccessPopup(false)}></div>
    <div className="popup1">
      <h2>{successMessage}</h2>
      <input className="button" type="submit" value={"Close"} onClick={() => setShowSuccessPopup(false)}/>
    </div>
  </>
)}

              <input
                type="number"
                placeholder="Age"
                value={houseServiceDetails.age}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, age: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={houseServiceDetails.address}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, address: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Landmark"
                value={houseServiceDetails.landmark}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, landmark: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Area Name"
                value={houseServiceDetails.areaName}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, areaName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Contact Details"
                value={houseServiceDetails.contact}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, contact: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Problem"
                value={houseServiceDetails.problem}
                onChange={(e) =>
                  setHouseServiceDetails({ ...houseServiceDetails, problem: e.target.value })
                }
                required
              />
              <input type="submit" className="button"  value={"Submit"}/>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup1">
          <h2>{successMessage}</h2>
          <input className="closebtn"  type="submit" value={"Close"} onClick={() => setShowSuccessPopup(false)}/>
        </div>
      )}
      <Rating/>
      <h1 className="similar">Visit Similar Hospitals</h1>
      <Firstnear/>
      <Footerpage />
    </div>
  );
};

export default Singledata;