import React, { useEffect, useState } from 'react';
import getGames from '../../Api/fetchGames';


const GameCard = ({ selectedGenres }) => {
    const [loading, setLoading] = useState(true)
    const [gamesList, setGamesList] = useState([])

    const filterGames = (games) => {
        return games.filter((game) => {
            return selectedGenres.every(genre => 
                game.genres.map(g => g.name).includes(genre))
        })
    }

    useEffect(() => {
        setGamesList([])
        const getData = async() => {
            const data = await getGames(selectedGenres)
            setGamesList(filterGames(data))
            setLoading(false)
        }
        getData()
    }, [])

    return(
     <>
        {loading ? (
            <p>we loading</p>
        ) : gamesList.length === 0 ? (
            <p>No games matching 😢</p>
        ): (
         <div className="game-cards-grid">
      {gamesList.map((game, i) => (
        <div className="game-card" key={i}>
          <img
            src={game.background_image}
            alt={game.name}
            className="game-card-image"
          />
          <div className="game-card-info">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
        </div>
      ))}
    </div>
        )}
     </>
    )
}

  

export default GameCard