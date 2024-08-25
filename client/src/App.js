import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import News from "./pages/News";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/turnos" element={<Appointments />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
