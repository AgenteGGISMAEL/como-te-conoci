import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TemasPage from './TemasPage';
import Agradecimientos from './Agradecimientos';
import ComoTeConoci from './ComoTeConoci';
import PorQueMeGustaste from './PorQueMeGustaste';
import PorQueTu from './PorQueTu';
import LoSiento from './Losiento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/temas" element={<TemasPage />} />
        <Route path="/agradecimientos" element={<Agradecimientos />} />
        <Route path="/como-te-conoci" element={<ComoTeConoci />} />
        <Route path="/por-que-me-gustaste" element={<PorQueMeGustaste />} />
        <Route path="/por-que-tu" element={<PorQueTu />} />
        <Route path="/lo-siento" element={<LoSiento />}/>
      </Routes>
    </Router>
  );
}

export default App;

