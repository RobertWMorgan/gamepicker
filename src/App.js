import './App.css';
import React, { useState } from 'react';
import GenreSelector from './Components/GenreSelector/GenreSelector';
import GameCard from './Components/GameSelector/GameCard';


function App() {
  const [selectedGenres, setSelectedGenres] = useState([])
  const [showGames, setShowGames] = useState(false) 

  const handleButtonClick = () => {
    setShowGames(true)
  }

  const handleResetButtonClick = () => {
    setShowGames(false)
    setSelectedGenres([])
  }

  return (
    <>
      <header className='Title-header'>
        <h1>
          Game Finder!
        </h1>
      </header>
      <main>
        {!showGames ? (
          <>
            <div className='Genre-select-banner'>
              <h3 className='Genre-select-header'>
                Pick your Genres:
              </h3>
              <button className={selectedGenres.length === 0 ? "GoButton-disabled" : "GoButton"} onClick={() => handleButtonClick()}>Go!</button>
            </div>
            <GenreSelector selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
          </>
        ) : (
          <>
             <button onClick={() => handleResetButtonClick()} className='GoButton'>Reset</button>
            <GameCard selectedGenres={selectedGenres} />
          </>
        )}
      </main>
    </>
  );
}



export default App;
