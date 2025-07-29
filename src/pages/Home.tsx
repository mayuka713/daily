import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import kitty from "../public/kitty.png";

const Home = () => {
    return (
  <div className='home-container'>
           <h1 className='neon-text'>ミニアプリ集へようこそ</h1>
           <div className='kitty-gal'>
         <img src='/images/kitty.png' alt="キティ" />
  <div className="face"></div>
  <div className="bow"></div>
  <div className="eyes"></div>
</div>
        <nav style={{ margin: '20px 0' }}>
        <Link to='/omikuji'><button style={{ fontFamily: 'sans-serif'}}>おみくじ🎍</button></Link>{' '}
        <Link to='/counter'><button>カウント</button></Link>{' '}
        <Link to='/weather'><button>天気</button></Link>
</nav>
</div>
    )
}

export default Home;