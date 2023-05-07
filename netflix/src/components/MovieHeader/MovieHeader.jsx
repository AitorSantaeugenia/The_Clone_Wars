import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import requests from '../../Request'
import { FaPlay, FaThumbsUp} from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
//Modal "More Info"
import Modal from '@mui/material/Modal';
import RPlayer from '../Player/Player';
import { IoCloseSharp } from 'react-icons/io5';
import Genres from '../Genres/Genres';

const Main = () => {
    // eslint-disable-next-line
    const[movies, setMovies] = useState([])
    let navigate = useNavigate();
    const[movie,setMovie] = useState([]);
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() =>{
        axios.get(requests.requestPopular).then((response) =>{
            setMovies(response.data.results);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
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

    // MODAL "More info"
    const showMovieModal = () => {
        setShowDiv(true);
        setOpen(true);
    }
    
    const hideMovieDiv = () => {
        setShowDiv(false);
        setOpen(false);
    }  

    return (
        <>
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-cover position-object-image" src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className="absolute w-full top-[20%] p-4 md:p-8 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                    <div className="my-4 flex">
                        <button className="border bg-slate-100 text-black border-gray-300 hover:bg-gray-300 py-2 px-5 font-bold flex items-center min-w-[110px]" onClick={navigateToPlay}><FaPlay className="mr-3 "/>Play</button>
                        <button className="border text-white bg-gray-500 py-2 px-5 ml-4 font-bold hover:bg-gray-700 flex items-center min-w-[110px]" onClick={showMovieModal}><AiOutlineInfoCircle className="mr-3 text-xl"/>More info</button>
                    </div>
                    <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
                </div>
            </div>
        </div>

        {/* Working with modal once clicking the More info button */}
        <Modal
        open={open}
        onClose={hideMovieDiv}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center m-auto items-center"
      >
        <div className="max-w-[50%] min-w-[50%] flex flex-col justify-center">
            <div className="max-w-[100%] min-w-[100%] relative bg-black">
              <div className="cursor-pointer max-w-[100%] min-w-[100%] flex justify-end absolute top-[15px]">
                <IoCloseSharp className="text-4xl mr-2.5 text-[#fff] bg-[#000] rounded-[50%] p-1.5 hover:border-2 hover:border-white" onClick={hideMovieDiv} />
              </div>
              <div className="flex absolute px-12 py-4 top-[70%]">
                <div className="flex justify-center items-center mr-2.5 cursor-pointer">
                  <button className="border bg-slate-100 text-black border-gray-300 hover:bg-gray-300 py-2 px-5 font-bold flex items-center min-w-[110px]" onClick={navigateToPlay}><FaPlay className="mr-3"/>Play</button>
                </div>
                <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer">
                    <FaThumbsUp />
                </div>
              </div>
              {open ?  <RPlayer movieItem={movie} type={"movie"}/> : null}
            </div>
          <div className="bg-[#000] px-12 py-4 text-white">
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-gray-200 mb-4">{movie?.title ? movie?.title : movie?.name}</p>
            <p className="text-gray-400 text-sm pb-4">Released: {movie?.release_date ? movie?.release_date : movie?.first_air_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-gray-200 mb-4">{movie?.overview ? movie?.overview : "We don't have an overview yet."}</p>
            <Genres genre={movie} type={"movie"} className="mb-2.5"/>
          </div>
          
        </div>
      </Modal>
      </>
    )
}

export default Main