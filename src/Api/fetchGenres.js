import axios from "axios"


const getGenres = async () => {
    try {
      const response = await axios.get("https://api.rawg.io/api/genres", {
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY
        }
      })
      return response.data.results.map ( genre => ({
          name: genre.name,
          slug: genre.slug,
          image: genre.image_background,
      }))
  } catch (error) {
    console.log(error)
    return []
  }
  }

  export default getGenres