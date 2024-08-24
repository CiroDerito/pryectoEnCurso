import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePag';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
