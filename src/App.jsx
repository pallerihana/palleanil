import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Landing from "./mainfolder/Landing";

import Maindata from "./mainfolder/Maindata";
import Singledata from "./mainfolder/Singledata";
import ComparePage from "./mainfolder/ComparePage";
import Ongole from "./mainfolder/Ongole";
import Guntur from "./mainfolder/Guntur";
import Vijayawada from "./mainfolder/Vijayawada";
import OngoleSingle from "./mainfolder/OngoleSingle";
import GunturSingle from "./mainfolder/GunturSingle";
import VijayawadaSingle from "./mainfolder/VijayawadaSingle";
import LoginVendor from "./mainfolder/LoginVendor";
import Vendorpage from "./mainfolder/Vendorpage";


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result/:id" element={<Singledata/>}/>
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/ongole" element={<Ongole/>}/>
        <Route path="/guntur" element={<Guntur/>}/>
        <Route path="/ongole/:id" element={<OngoleSingle/>}/>
        <Route path="/guntur/:id" element={<GunturSingle/>}/>
        <Route path="/vijayawada/:id" element={<VijayawadaSingle/>}/>
        <Route path="/vijayawada" element={<Vijayawada/>}/>
        <Route path="/results/:query" element={<Maindata />} />
        {/* <Route path="/vendor" element={<Vendo />} /> */}
        <Route path="/vendor" element={<LoginVendor/>}/>
        <Route path="/vendorpage" element={<Vendorpage/>}/>
      
      </Routes>
  );
};

export default App;
