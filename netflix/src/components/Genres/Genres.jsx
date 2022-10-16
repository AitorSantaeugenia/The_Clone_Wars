import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Genres = ({genre, type}) => {
  const[genres, setGenres] = useState([])

  useEffect(() =>{
    const id = genre.id;
    const key = process.env.REACT_APP_IMDB_API_KEY; 

    if(type === "movie"){
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then((response) =>{
        setGenres(response.data.genres)
       })
    }else{
      axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}`).then((response) =>{
        setGenres(response.data.genres)
       })
    }
  },[genre.id])

  return (
    <div className="flex flex-wrap">
      {genres.map((item) => (
          <span key={item.name} className="text-sm">
            <span className="mx-2">·</span> {item.name}
          </span>
       ))}
    </div>
  )
}

export default Genres