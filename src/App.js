import React, {useState, useEffect} from 'react';
import TileGrid from './TileGrid';
import './index.css';
import './App.css';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='navbar'></div>
      <TileGrid />
    </div>
  );
};

export default App;
