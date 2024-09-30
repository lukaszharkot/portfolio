import React from 'react';
import TileGrid from './components/TileGrid';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <TileGrid />
      <div className='space'></div>

      {/*Projects*/}
      <div className='projects-label'>
        
      </div>
      <div className="stacking-cards-container">
        <div className="stacking-card card-1">
          <h2>Card 1</h2>
          <p>This is the content of the first card.</p>
        </div>
        <div className="stacking-card card-2">
          <h2>Card 2</h2>
          <p>This is the content of the second card.</p>
        </div>
      </div>

      {/* Extra content for scrolling */}
      <div className="extra-content">
        <p>Keep scrolling to see the effect...</p>
      </div>
    </div>
  );
};

export default App;
