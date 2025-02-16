import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vendor.css"

const LoginVendor = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "palleanil" && password === "Anil@1436") {
      navigate("/Vendorpage"); // Redirect to Vendor.jsx
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="vendor-container">
      <form className="vendor-form" onSubmit={handleLogin}>
        <h2 className="vendor-heading">Login Your Account</h2>
        {error && <p className="vendor-error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="vendor-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="vendor-input"
          required
        />
        <input type="submit" value={"Login"} className="vendor-button" />
      </form>
    </div>
  );
};

export default LoginVendor;
