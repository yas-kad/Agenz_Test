import React from 'react'
import Header from './components/Header.js';
import MainContent from './components/MainContent/MainContent.js';
import NavBar from './components/NavBar.js'
import Map from './components/map/Map'
import './style.css';

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='lineDiv'></div>
      <Header />
      {/* main content */}
      <MainContent />
      
      {/* map */}
      {/* cards */}
    </div>
  );
}

export default App;
