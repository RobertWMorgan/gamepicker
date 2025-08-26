
const GenreCard = ({ genres, handleGenreClick, selectedGenres }) => {


    const checkSelected = (cardGenre) => {
        if (selectedGenres.includes(cardGenre)) {
            return "Card-selected"
        } else return ''
        } 

    return(
     <>
     {genres.map((genre, index) => {
        return(
            <div className={`Cards ${checkSelected(genre.name)}`} key={index} onClick={() => handleGenreClick(genre.name)}>
                <img src={genre.image} alt={genre.name} className= 'Card-image'/>
                <div className='Card-overlay'></div>
                <p>{genre.name}</p>
            </div>
        )
     })}
     </>
    )
}

export default GenreCard