// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Escursioni from './pages/Escursioni';
import Storia from './pages/Storia';
import Collaboratori from './pages/Collaboratori';
import Direttivo from './pages/Direttivo';
import Documenti from './pages/Documenti';
import Layout from './layout/LayoutMaster'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
export default function App() {
   
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escursioni" element={<Escursioni />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/collaboratori" element={<Collaboratori />} />
          <Route path="/direttivo" element={<Direttivo />} />
          <Route path="/documenti" element={<Documenti />} />
        </Routes>
      </Layout>
    </Router>
  );
};


