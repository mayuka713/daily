import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Weather from './pages/Weather';
import Omikuji from './pages/Omikuji';


const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/omikuji' element={<Omikuji />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/weather' element={<Weather />} />

      </Routes>
    </Router>
  );
};

export default App;