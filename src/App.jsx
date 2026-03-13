import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TournamentDetail from "./components/TabSystem"
import { AffichData} from './components/TournamentCards'
// import RegistrationForm from "./components/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AffichData />} />
        <Route path="/Pagedetailecard/:id" element={<TournamentDetail />} />
      </Routes>
    </BrowserRouter>
  );
    
     
}

export default App;
