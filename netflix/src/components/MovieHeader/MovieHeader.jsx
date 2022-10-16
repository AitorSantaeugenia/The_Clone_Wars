import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import requests from '../../Request'
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Main = () => {
    const[movies, setMovies] = useState([])
    let navigate = useNavigate();
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() =>{
        axios.get(requests.requestPopular).then((response) =>{
            setMovies(response.data.results)
        })
    },[])

    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0,num) + "..."
        }else{
            return str;
        }
    }

    const navigateToPlay = () => {
        let path = `/play`; 
        navigate(path);
    }

    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                {/* base url + backdrop_path */}
                <img className="w-full h-full object-cover position-object-image" src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className="absolute w-full top-[20%] p-4 md:p-8 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                    <div className="my-4 flex">
                        <button className="border bg-slate-100 text-black border-gray-300 hover:bg-gray-300 py-2 px-5 font-bold flex items-center min-w-[110px]" onClick={navigateToPlay}><FaPlay className="mr-3 "/>Play</button>
                        <button className="border text-white bg-gray-500 py-2 px-5 ml-4 font-bold hover:bg-gray-700 flex items-center min-w-[110px]"><AiOutlineInfoCircle className="mr-3 text-xl"/>More info</button>
                    </div>
                    <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
                </div>
            </div>
        </div>
    )
}

export default Main