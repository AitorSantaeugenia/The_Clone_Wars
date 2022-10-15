import React, { useState, useEffect } from 'react'
import axios from 'axios'
//react player for trailers
import ReactPlayer from "react-player";
import requests from '../../Request'

const RPlayer = ({movieItem}) => {
  const[movie, setMovie] = useState([])
  let trailer = ""

  useEffect(() =>{
    const id = movieItem.id;
    const key = process.env.REACT_APP_IMDB_API_KEY; 

    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US&append_to_response=videos`).then((response) =>{
      setMovie(response.data.results)
    })
  },[movieItem.id])

  let found = {}
  found = movie.find(element => element.name === "Official Trailer")

  if(!found || found.name !== "Official Trailer"){
    found = movie.find(element => element.name.includes("Official Trailer"))
  }else if(!found){
    found = movie.find(element => element.name)
  }else{
    trailer = found.key;
  }

  return (
    <>
    {trailer ?  
      <ReactPlayer
        url={`${requests.YOUTUBE_URL}${trailer}`}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              autoplay: 1,
              modestbranding: 1,
              iv_load_policy: 3 },
          embedOptions: {
            controls: 0,
            autoplay: 1,
            modestbranding: 1,
            iv_load_policy: 3,
          },
          }
          
        }}
        playing={true}
        volume={1}
        width="50vw"
        height="50vh"              
      />
    : 
      <img className="w-full block" src={`http://image.tmdb.org/t/p/w500${movieItem?.backdrop_path}`} alt={movieItem?.title ? movieItem?.title : movieItem?.name} />}
    </>
  )
}

export default RPlayer