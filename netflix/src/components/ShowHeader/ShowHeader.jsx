import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../../Request'
import "./ShowHeader.css"

const Main = () => {
    const[shows, setShows] = useState([])

    const show = shows[Math.floor(Math.random() * shows.length)]

    useEffect(() =>{
        axios.get(requests.requestLatestTV).then((response) =>{
            setShows(response.data.results)
        })
    },[])

    // console.log(movie)
    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0,num) + "..."
        }else{
            return str;
        }
    }

  return (
    <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            {/* base url + backdrop_path */}
            <img className="w-full h-full object-cover" src={`http://image.tmdb.org/t/p/original/${show?.backdrop_path}`} alt={show?.original_name} />
            <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold">{show?.name}</h1>
                <div className="my-4">
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                    <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
                </div>
                <p className="text-gray-400 text-sm">Released: {show?.first_air_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(show?.overview, 150)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main