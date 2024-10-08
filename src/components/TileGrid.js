import React, { useEffect, useState, useCallback } from 'react';
import anime from 'animejs';
// import bg from './background.png';


import './TileGrid.css'; 

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
      opacity: toggled ? 1 : 0, 
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTiles = useCallback(
    (quantity) => {
      const newTiles = Array.from({ length: quantity }, (_, index) => ({
        id: index,
        opacity: toggled ? 0 : 1,
      }));
      setTiles(newTiles);
    },
    [toggled] 
  );

  useEffect(() => {
    const createGrid = () => {
      const containerSize = 0.7 * window.innerHeight;
      const size = window.innerWidth > 800 ? 100 : 50;

      const newColumns = Math.floor(window.innerWidth / size);
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
  }, [createTiles]); // Now includes createTiles in the dependency array

  return (
    <div className={`tile-container ${toggled ? 'toggled' : ''}`}>
      {/* <div className='img-box' onClick={() => handleOnClick(1)} style={{ opacity: toggled ? 1 : 0, visibility: toggled ? 'visible' : 'hidden'}}>
          <img alt='bg' src={bg}></img>
      </div> */}
      <div
        id="tiles"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="tile"
            style={{ opacity: tile.opacity }} // Set initial opacity from the tile state
            onClick={() => handleOnClick(tile.id)}
          />
        ))}
        <h1 id="title" className="centered" style={{ color: 'black', opacity: toggled ? 0 : 1, visibility: toggled ? 'hidden' : 'visible' }}>
          Hi, my name is <span className="fancy">Łukasz Harkot</span>.
        </h1>

      </div>
    </div>
  );
};

export default TileGrid;
