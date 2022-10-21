import React from 'react'
import Header from './components/Header.js';
import MainContent from './components/MainContent/MainContent.js';
import NavBar from './components/NavBar.js'
import './style.css';

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='lineDiv'></div>
      <Header />
      <MainContent />
      
    </div>
  );
}

export default App;
