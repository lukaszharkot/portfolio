import React from 'react';
import TileGrid from './components/TileGrid';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <div id='home' style={{position: 'absolute', top:'0'}}/>
      <Navbar />
      <TileGrid />
      <div className='about-content' id='about'>
        <div className='about-outline'>
          <div className='about-sidebar'>
          </div>
          <div className='about-main-body'>
          </div>
          <div className='about-side-body'>
          </div>
        </div>
      </div>

      {/*Projects*/}
      <div id='projects'>
        {/* <div className='projects-container'>
            <div className='projects-label-container'><h1 className='projects-label fancyText'>Projects</h1></div>
            <div className='underline'></div>
        </div> */}
        <div className="stacking-cards-container">
          <div className="default-card card-1" id="card1">
            <h2>Card 1</h2>
            <p>This is the content of the first card.</p>
          </div>
          <div className="stacking-card card-2">
            <h2>Card 2</h2>
            <p>This is the content of the second card.</p>
          </div>
        </div>
        
      {/* Contact */}
        <div className="extra-content" id='contact'>
        </div>
      </div>
    </div>
  );
};

export default App;
