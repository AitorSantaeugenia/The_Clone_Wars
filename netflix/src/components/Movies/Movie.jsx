import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import "./Movie.css";
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import { IoCloseSharp } from 'react-icons/io5'
import { FaPlay, FaThumbsUp, FaPlus, FaChevronDown, FaCheck } from 'react-icons/fa'
import {UserAuth} from '../../context/AuthContext'
import {db} from '../../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import Genres from '../Genres/Genres'
import RPlayer from '../Player/Player'

const Movie = ({item, type}) => {
    const [like, setLike] = useState([false])
    // eslint-disable-next-line
    const [saved, setSaved] = useState(false)
    //Modal
    // eslint-disable-next-line
    const [showDiv, setShowDiv] = useState(false)
    const {user} = UserAuth()
    let title = ""
    const [open, setOpen] = useState(false)
    //Popover
    const divRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null)
    // eslint-disable-next-line
    const [showPopover, setShowPopover] = useState(false)
    const [openPopover, setPopover] = useState(false)
    let navigate = useNavigate();
    let handle = null;

    const truncateString = (str, num) => {
      if(str?.length > num) {
          return str.slice(0,num) + "..."
      }else{
          return str;
      }
    }

    if(item?.title){
      title = item?.title;
    }else{
      title = item?.name;
    }

    const movieID = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: title,
            img: item.backdrop_path
          })
        })
      }else{
        alert("Please log in to save a movie")
      }
    }

    // MODAL
    const showMovieModal = () => {
      setShowDiv(true);
      setOpen(true)

      setPopover(false)
      setShowPopover(false)
      setAnchorEl(null);
    }

    const hideMovieDiv = () => {
      setShowDiv(false)
      setOpen(false)
    }

    //POPOVER MODAL
    const showPopoverDiv = () => {
      handle = setTimeout(() => {
        setPopover(true);
        setShowPopover(true)
        setAnchorEl(divRef.current)
    }, 1000);
    }

    const cancelPopOverDiv = () => {
      if (handle) {
        clearTimeout(handle);
        handle = undefined;
      }
    }

    const hidePopOver = () => {
      setPopover(false)
      setShowPopover(false)
      setAnchorEl(null);
    }

    const navigateToPlay = () => {
      let path = `/play`; 
      navigate(path);
    }

  return (
    <>
    {/* Some movies or tvshows have no image (backdrop_path) that's why we do this ternary */}
    {item?.backdrop_path ? 
    <>
    <div className="2xl:w-[280px] xl:w-[280px] lg:w-[280px] md:w-[240px] sm:w-[200px] smler:w-[200px] inline-block relative p-2" onMouseOver={showPopoverDiv} ref={divRef} onMouseLeave={cancelPopOverDiv}>
      <div>
        <img className="w-full h-auto block" src={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title ? item?.title : item?.name} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full text-white hover:opacity-100 bg-black/30 cursor-pointer">
          <p className={`white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-[100%] text-center`}>{item?.title ? truncateString(item?.title, 30) : truncateString(item?.name, 30)}</p>
          {/* <p onClick={saveShow}>
              { like ? <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> :  <FaHeart className="absolute top-4 left-4 text-gray-300" />}
          </p> */}
      </div>
  </div>
  <Modal
        open={open}
        onClose={hideMovieDiv}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center m-auto items-center"
      >
        <div className="max-w-[50%] min-w-[50%] flex flex-col justify-center">
            <div className="max-w-[100%] min-w-[100%] relative">
              <div className="cursor-pointer max-w-[100%] min-w-[100%] flex justify-end absolute top-[15px]">
                <IoCloseSharp className="text-4xl mr-2.5 text-[#fff] bg-[#000] rounded-[50%] p-1.5 hover:border-2 hover:border-white" onClick={hideMovieDiv} />
              </div>
              <div className="flex absolute px-12 py-4 top-[70%]">
                <div className="flex justify-center items-center mr-2.5 cursor-pointer">
                  <button className="border bg-slate-100 text-black border-gray-300 hover:bg-gray-300 py-2 px-5 font-bold flex items-center min-w-[110px]" onClick={navigateToPlay}><FaPlay className="mr-3"/>Play</button>
                </div>
                <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer" onClick={saveShow}>
                  { like ? <FaPlus className=""/> :  <FaCheck />}
                </div>
                <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer">
                    <FaThumbsUp />
                </div>
              </div>
              {open ?  <RPlayer movieItem={item} type={type}/> : null}
            </div>
          <div className="bg-[#000] px-12 py-4 text-white">
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-4">{item?.title ? item?.title : item?.name}</p>
            <p className="text-gray-400 text-sm pb-4">Released: {item?.release_date ? item?.release_date : item?.first_air_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-4">{item?.overview ? item?.overview : "We don't have an overview yet."}</p>
            <Genres genre={item} type={type} className="mb-2.5"/>
          </div>
          
        </div>
      </Modal>

      <Popover 
        open={openPopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        className="ml-[-60px]"
      >
      <div className="popOver block" onMouseLeave={hidePopOver}>
        <div className="flex flex-col">
          <div className="w-full h-auto">
            <span className="top-20 w-full min-h-[50px] h-auto flex justify-center items-center text-3xl absolute text-center bg-black/40 text-white">{item?.title ? truncateString(item?.title, 30) : truncateString(item?.name, 30)}</span>
            <img src={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title ? item?.title : item?.name} />
          </div>
          <div className="flex justify-between p-5">
            <div className="flex">
              <div className="movieButtonPlay flex justify-center items-center mr-2.5 cursor-pointer" onClick={navigateToPlay}>
                <FaPlay className="text-[#181818]"/>
              </div>
              <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer">
                <FaThumbsUp />
              </div>
              <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer" onClick={saveShow}>
                { like ? <FaPlus className=""/> :  <FaCheck />}
              </div>
            </div>
            <div className="movieButtons flex justify-center items-center cursor-pointer" onClick={showMovieModal}>
            <FaChevronDown/>
            </div>
          </div>
        </div>
        <div className="pl-5 text-white">
          <div className="mb-2.5">Release date: {item?.release_date ? item?.release_date : item?.first_air_date}</div>
          <Genres genre={item} type={type} className="mb-2.5"/>
        </div>
      </div>
      </Popover>
  </>
  : null}
  </>
  )
}

export default Movie