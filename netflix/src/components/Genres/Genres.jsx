import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

const Genres = ({genre}) => {
  // console.log(genre)

  const[genres, setGenres] = useState([])


  useEffect(() =>{
    const id = genre.id;
    const key = process.env.REACT_APP_IMDB_API_KEY; 

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then((response) =>{
     console.log(response.data.genres)
     setGenres(response.data.genres)
    })
  },[])

  return (
    <div className="flex">
      {genres.map((item) => (
          <span>
            <span className="mx-2">·</span> {item.name}
          </span>
       ))}
    </div>
  )
}

export default Genres