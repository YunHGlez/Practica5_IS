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
        <Route path="/AccesoYRegistro" element={<AccessoYRegistro add={addUser} read={readUser}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

async function addUser (user) {
  console.log(user);
  const response = await fetch('http://127.0.0.1:5000/Registro', {
    method:'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
  if (data.error !== undefined) {
    alert("ERROR! " + data.error);
  } else {
    alert("Usuario registrado!");
  }
}

async function readUser (user) {
  console.log(user);
  const response = await fetch('http://127.0.0.1:5000/Acceso', {
    method:'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
  if (data.error !== undefined) {
    alert("ERROR! " + data.error);
  } else {
    alert("¡Bienvenido de vuelta " + data.nombre + "!")
  }
}

export default App;
