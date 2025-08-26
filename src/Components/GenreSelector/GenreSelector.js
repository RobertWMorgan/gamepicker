import React, { useEffect, useState } from 'react';
import getGenres from '../../Api/fetchGenres';
import GenreCard from './GenreCard';
import Loading from '../Loading';

const GenreSelector = ({ selectedGenres, setSelectedGenres }) => {
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)

     const handleGenreClick = (selected) => {
        setSelectedGenres((prev)=> {
               if(prev.includes(selected)) {
                    return prev.filter(genre => genre != selected)
               } else {
                    return [...prev, selected]
               }
            })
    }

    useEffect(() => {
        const getData = async() => {
            const data = await getGenres()
            setGenres(data)
            setLoading(false)
        }
        getData()
    }, [])

    if (loading === true) {
        return <Loading />
    } else {
        return(
            <div className="Genre-Cards">
                <GenreCard genres={genres} handleGenreClick={handleGenreClick} selectedGenres={selectedGenres} />
            </div>
    )
    }
}

export default GenreSelector