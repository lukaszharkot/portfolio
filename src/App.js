import React, {useState} from 'react';
import TileGrid from './components/TileGrid';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import vector from './components/photos/vector.png'

import { PiGraduationCapFill, PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";


const App = () => {
  const [active, setActive] = useState('button1')

  const contentChange = (x) => {
    setActive(x)
    console.log(active)
  }

  return (
    <div>
      <div id='home' style={{position: 'absolute', top:'0'}}/>
      <Navbar />
      <TileGrid />
      <div className='about-content' id='about'>
        <div className='about-outline'>
          <div className='about-sidebar'>
            <div className='vector-box'>
              <img className='vector-img'src={vector} alt='vector'></img>
            </div>
            <div style={{width: '100%'}}>
              <div className='about-label'>About Me</div>
            </div>
            <div className='bar-container'>
              <div className={`bar-button ${active === 'button1' ? 'clicked': ''}`} onClick={() => contentChange('button1')}><PiPersonArmsSpreadFill className={`bar-icon ${active === 'button1' ? 'clicked': ''}`} /> Who am I?<div className={`${active === 'button1' ? 'bar-line': ''}`}></div></div>
              <div className={`bar-button ${active === 'button2' ? 'clicked': ''}`} onClick={() => contentChange('button2')}><PiGraduationCapFill className={`bar-icon ${active === 'button2' ? 'clicked': ''}`} /> Education<div className={`${active === 'button2' ? 'bar-line': ''}`}></div></div>
              <div className={`bar-button ${active === 'button3' ? 'clicked': ''}`} onClick={() => contentChange('button3')}><HiWrenchScrewdriver className={`bar-icon ${active === 'button3' ? 'clicked': ''}`} /> Skills<div className={`${active === 'button3' ? 'bar-line': ''}`}></div></div>
              <div className={`bar-button ${active === 'button4' ? 'clicked': ''}`} onClick={() => contentChange('button4')}><MdWork className={`bar-icon ${active === 'button4' ? 'clicked': ''}`} /> Experience<div className={`${active === 'button4' ? 'bar-line': ''}`}></div></div>
            </div>
            <div className='cv'><HiDownload className='cv-ico'/> Download my resume</div>
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
