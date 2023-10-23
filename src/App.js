import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/fontawesome'; // Iconos para toda la pagina NO BORRAR
import './assets/styles/reset.css';
import './assets/styles/App.css';
import Home from "./pages/Home";
import AccessoYRegistro from "./pages/AccesoYRegistro";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AccesoYRegistro" element={<AccessoYRegistro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
