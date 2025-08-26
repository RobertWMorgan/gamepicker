import axios from "axios"

const getGames = async (genresarr) => {

    try {
      console.log(genresarr.map(genre => genre.toLowerCase()))
      const response = await axios.get("https://api.rawg.io/api/games", {
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY,
          genres: genresarr.map(genre => genre.toLowerCase()).join(','),
          page_size: 50
        }
      })
      const gamesList = response.data.results
      console.log(gamesList)
      return gamesList
  } catch (error) {
    console.log(error)
  }
}

export default getGames