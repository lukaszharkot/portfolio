import React from 'react';
import TileGrid from './components/TileGrid';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <TileGrid />
      <div className='space'></div>
    </div>
  );
};

export default App;
