import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Weather from './pages/Weather';
import Omikuji from './pages/Omikuji';


const App: React.FC = () => {
  return (
    <Router>
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>ミニアプリ集</h1>
      <nav>
      <Link to='/omikuji'><button>おみくじ</button></Link>
      <Link to='/counter'><button>カウント</button></Link>
      <Link to='/weather'><button>天気</button></Link>
      </nav>

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/omikuji' element={<Omikuji />} />
  <Route path='/counter' element={<Counter />} />
  <Route path='/weather' element={<Weather />} />

</Routes>
</div>
</Router>
);
};

export default App;