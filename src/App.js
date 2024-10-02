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
            <div className='left-side'>

            </div>
            <div className='right-side' style={{backgroundColor: '#6b66da'}}>
              
            </div>
          </div>
          <div className="stacking-card card-2">
            <div className='left-side'>

            </div>
            <div className='right-side' style={{backgroundColor: '#f84f38'}}>
            
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact-container" id='contact'>
          <div className='contact-card' id='cardC'>
            <div className='contact-label-container'>
              <div className='contact-label1 fancyText' style={{fontSize:'2em', color:'#222222'}}>Contact</div>
              <h1 style={{color: '#f4f3fa', fontWeight: '500'}}>Me</h1>
            </div>
          </div>
      </div>
      <div className='space'></div>
    </div>
  );
};

export default App;
