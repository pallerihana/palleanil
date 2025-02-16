import React, { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import "./hmf.css";

const Vendorpage = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const admissionData = [
    { month: "Jan-22", admitted: 2500, outpatient: 1500, cost: 1000000 },
    { month: "Feb-22", admitted: 3000, outpatient: 1800, cost: 1500000 },
    { month: "Mar-22", admitted: 2000, outpatient: 1200, cost: 1200000 },
    { month: "Apr-22", admitted: 4000, outpatient: 2200, cost: 1800000 },
  ];

  const divisionData = [
    { name: "Gynecology", value: 20 },
    { name: "Neurology", value: 25 },
    { name: "Cardiology", value: 21 },
    { name: "Surgery", value: 30 },
  ];

  const satisfactionData = [
    { name: "Poor", value: 28 },
    { name: "Good", value: 20 },
    { name: "Excellent", value: 52 },
  ];

  return (
    <div className="vendor-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="/src/assets/hospitals images ongole/Prakasam Super Speciality Hospital.avif" alt="Hospital Logo" className="logo" />
          <h4>AR Hospital</h4>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
          <li onClick={() => setActivePage("profile")}>Profile</li>
          <li onClick={() => setActivePage("help")}>Help</li>
          <li onClick={() => setActivePage("settings")}>Settings</li>
          <li onClick={() => setActivePage("logout")}>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activePage === "dashboard" && (
          <div className="dashboard">
            <h2>AR Hospital Dashboard</h2>

            <div className="summary-section">
              <div className="summary-card">Total Patients: <strong>50,876</strong></div>
              <div className="summary-card">Operational Cost: <strong>$16,456K</strong></div>
              <div className="summary-card">Avg Patients per Doctor: <strong>27.46</strong></div>
            </div>

            <div className="chart-container">
              <h3>Admission vs Cost Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={admissionData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="admitted" stroke="#8884d8" />
                  <Line type="monotone" dataKey="outpatient" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="cost" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container">
              <h3>Admissions by Division</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={divisionData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container">
              <h3>Overall Patient Satisfaction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={satisfactionData} dataKey="value" nameKey="name" fill="#82ca9d" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activePage === "profile" && (
          <div className="prole11">
          <h2>Profile</h2>
          <input type="text" placeholder="Hospital Name" />
          <input type="file" placeholder="Upload Hospital Pics" multiple />
          
          <h3>Services</h3>
          <input type="text" placeholder="Enter Service" />
          <input type="submit" value="Add Service" className="ani11" />
          
          <h3>Insurance Details</h3>
          <input type="text" placeholder="Enter Insurance Details" />
          <input type="submit" value="Add Insurance" className="ani11" />
        </div>
        )}

        {activePage === "help" && (
          <div className="help11">
          <h2>Help</h2>
          <p><strong>Name:</strong> Palle Anil</p>
          <p>
            <strong>Contact us at:</strong> 
            <a href="mailto:palleanil.par@gmail.com"> palleanil.par@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> +91 7989847811</p>
          <p><strong>Address:</strong> QIS College of Engineering and Technology, Ongole</p>
        </div>
        )}

        {activePage === "settings" && (
         <div className="settings">
         <h2>Settings</h2>
         <p><strong>Notification Preferences:</strong> Enabled</p>
         <p><strong>Language:</strong> English</p>
         <p><strong>Theme:</strong> Light</p>
       </div>
        )}

        {activePage === "logout" && (
          <div className="logout">
            <button onClick={() => (window.location.href = "/")}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vendorpage;
