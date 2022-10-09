import React, { useState, useRef } from 'react'
import { FaPlay, FaThumbsUp, FaPlus, FaChevronDown, FaCheck } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import {UserAuth} from '../../context/AuthContext'
import {db} from '../../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import "./Movie.css"
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import { Component } from 'react'

const Movie = ({item}) => {
    const [like, setLike] = useState([false])
    // eslint-disable-next-line
    const [saved, setSaved] = useState(false)
    //Modal
    const [showDiv, setShowDiv] = useState(false)
    const {user} = UserAuth()
    let title = ""
    const [open, setOpen] = useState(false)
    //Popover
    const divRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null)
    const [showPopover, setShowPopover] = useState(false)
    const [openPopover, setPopover] = useState(false)


    if(item?.title){
      title = item?.title;
    }else{
      title = item?.name;
    }

    // for(let i=0; i>item?.genre_ids.legnth;i++){
    //   switch (item?.genre_ids[i]) {
    //     case 28:
    //       item.genre_ids[i] = "Action";
    //     case 12:
    //       return "Adventure";
    //     case 16:
    //       return "Animation";
    //     case 35:
    //       return "Comedy";
    //     case 80:
    //       return "Crime";
    //     case 99:
    //       return "Documentary";
    //     case 18:
    //       return "Drama";
    //     case 10751:
    //       return "Family";
    //     case 14:
    //       return "Fantasy";
    //     case 36:
    //       return "History";
    //     case 27:
    //       return "Horror";
    //     case 10402:
    //       return "Music";
    //     case 9648:
    //       return "Mystery";
    //     case 10749:
    //       return "Romance";
    //     case 878:
    //       return "Science Fiction";
    //     case 10770:
    //       return "TV Movie";
    //     case 53:
    //       item.genre_ids[i] = "Thriller";       
    //     case 10752:
    //       return "War";       
    //     case 37:
    //       return "Western";  
          //  case 9999:
          //   return "Last test trying to know why I can't push using CLI but yes with gitkraken or fork test"
    //   }
    // }
   

    const movieID = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
      console.log("menta");
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

    const showMovieModal = () => {
      setShowDiv(true);
      setOpen(true)
      // console.log(item)
    }

    const showPopoverDiv = () => {
      setPopover(true);
      setShowPopover(true)
      setAnchorEl(divRef.current)
      console.log(anchorEl)
      console.log(divRef.current)
      
      // console.log(item)
    }

    const hiddeMovieDiv = () => {
      setShowDiv(false)
      setOpen(false)
      console.log("now shutdown mofo")
    }

    const hidePopOver = () => {
      setPopover(false)
      setShowPopover(false)
      setAnchorEl(null);
    }

  return (
    <>
    {/* Some movies or tvshows have no image (backdrop_path) that's why we do this ternary */}
    {item?.backdrop_path ? 
    <>
    <div className="2xl:w-[280px] xl:w-[280px] lg:w-[280px] md:w-[240px] sm:w-[200px] smler:w-[200px] inline-block relative p-2 fantasy" onMouseOver={showMovieModal} ref={divRef}>
      <div>
        <img className="w-full h-auto block" src={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title ? item?.title : item?.name} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full text-white hover:opacity-100 hover:bg-black/80 cursor-pointer">
          <p className={`white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-[100%] text-center`}>{item?.title ? item?.title : item?.name}</p>
          {/* <p onClick={saveShow}>
              { like ? <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> :  <FaHeart className="absolute top-4 left-4 text-gray-300" />}
          </p> */}
      </div>

      
      {/* <div className={showDiv ? "testHover block" : "testHover hidden"}>
        <div className="flex justify-between items-center">
          <div className="flex justify-space-around items-center mb-2.5">
            <div className="movieButtonPlay flex justify-center items-center mr-2.5 cursor-pointer">
              <FaPlay className="text-[#181818]"/>
            </div>
            <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer">
              <FaThumbsUp />
            </div>
            <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer" onClick={saveShow}>
              { like ? <FaPlus className=""/> :  <FaCheck />}
            </div>
          </div>
          
          <div className="movieButtons flex justify-center items-center mb-2.5 cursor-pointer">
            <FaChevronDown />
          </div>
        </div>
        <div className="mb-2.5">Release date: {item?.release_date}</div>
        <div>{item?.genre_ids[0] }</div>
      </div> */}
  </div>
  <Modal
        open={open}
        onClose={hiddeMovieDiv}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center m-auto items-center"
      >
        <div className="max-w-[50%] min-w-[50%] flex flex-col justify-center">
          <div className="cursor-pointer absolute max-w-[50%] min-w-[50%] flex justify-end top-[125px] ">
            <IoCloseSharp className="text-4xl mr-2.5 text-[#fff] bg-[#181818] rounded-[50%] p-1.5 hover:border-2 hover:border-white" onClick={hiddeMovieDiv} />
          </div>
          <div className="max-w-[100%] min-w-[100%]">
            <img className="w-full block" src={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title ? item?.title : item?.name} />
          </div>

          <div className="flex absolute px-12 py-4 mt-36">
            <div className="flex justify-center items-center mr-2.5 cursor-pointer">
              <button className="border bg-slate-100 text-black border-gray-300 hover:bg-gray-300 py-2 px-5 font-bold flex items-center min-w-[110px]"><FaPlay className="mr-3 "/>Play</button>
            </div>
            <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer" onClick={saveShow}>
              { like ? <FaPlus className=""/> :  <FaCheck />}
            </div>
            <div className="movieButtons flex justify-center items-center mr-2.5 cursor-pointer">
                <FaThumbsUp />
            </div>
          </div>
          <div className="bg-[#141414] px-12 py-4">
            <p className="text-gray-400 text-sm pb-4">Released: {item?.release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{item?.overview}</p>
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
      >
        <div className="popOver">
        dfasdfasfdfasdfsadfsdf
        </div>
      </Popover>
  </>
  : null}
  </>
  )
}

export default Movie