import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaMicrophone } from "react-icons/fa"
import "./hmf.css"

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim() === "") return;
    navigate(`/results/${input}`);
  };

  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const voiceInput = event.results[0][0].transcript;
      setInput(voiceInput);
      setTimeout(() => navigate(`/results/${voiceInput}`), 1000);
    };
  };

  return (
    <div >
      <div className="mainsearchbar">
        <input
          type="text"
          placeholder="Enter City or Service"
          
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch} >
          Search
        </button><i onClick={handleVoiceSearch}  className="mico">
        <FaMicrophone size={34} color="black" />
        </i>
        
      </div>
    </div>
  );
};

export default Search;
