import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import Dashboard from './Pages/Dashboard/dashboard';

function RoutesApp() {
  return (
    <>
      <Sidebar /> {/* Adicionando a Sidebar */}
      <Header /> {/* Adicionando o Header */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Definindo a rota para Home */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
