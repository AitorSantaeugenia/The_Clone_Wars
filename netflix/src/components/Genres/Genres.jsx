import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Genres = ({genre}) => {
  const[genres, setGenres] = useState([])

  useEffect(() =>{
    const id = genre.id;
    const key = process.env.REACT_APP_IMDB_API_KEY; 

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then((response) =>{
     setGenres(response.data.genres)
    })
  },[genre.id])

  return (
    <div className="flex">
      {genres.map((item) => (
          <span key={item.name}>
            <span className="mx-2">·</span> {item.name}
          </span>
       ))}
    </div>
  )
}

export default Genres