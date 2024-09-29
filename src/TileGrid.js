import React, { useEffect, useState } from 'react';
import anime from 'animejs'; // Make sure to install animejs
import './TileGrid.css'; // Import your CSS styles here

const TileGrid = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(false);
  const [tiles, setTiles] = useState([]);

  const toggle = () => {
    setToggled(prev => !prev);
  };

  const handleOnClick = index => {
    toggle();

    anime({
      targets: '.tile',
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTiles = quantity => {
    const newTiles = Array.from({ length: quantity }, (_, index) => ({
      id: index,
    }));
    setTiles(newTiles);
  };

  useEffect(() => {
    const createGrid = () => {
    const containerSize = 600;
      const size = window.innerWidth > 800 ? 100 : 50;

      const newColumns = Math.floor(window.innerWidth  / size);
      const newRows = Math.floor(containerSize / size);

      setColumns(newColumns);
      setRows(newRows);
      createTiles(newColumns * newRows);
    };

    createGrid(); // Call the createGrid function to set the initial state
    window.addEventListener('resize', createGrid);
    
    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, []);

  return (
    <div className='tile-container'>
        <div id="tiles" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
        {tiles.map(tile => (
            <div
            key={tile.id}
            className="tile"
            style={{ opacity: toggled ? 0 : 1 }}
            onClick={() => handleOnClick(tile.id)}
            />
        ))}
        <h1 id="title" className="centered" style={{color: 'black', opacity: toggled ? 1 : 0 }}>
            Hi, my name is <span className="fancy">Łukasz Harkot</span>.
        </h1>
        </div>
    </div>
  );
};

export default TileGrid;
