import React, { useState } from 'react'
import ReactPlayer from "react-player";
import "./Play.css"
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Play = () => {
  let navigate = useNavigate();
  const[show, setShow] = useState(true)
  const[mousein, setMouseIn] = useState(false)

  const navigateBack = () => {
    let path = `/browse`; 
    navigate(path);
  }

  const showControls = () =>{
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  const showControlsOnLeave = () =>{
    setMouseIn(!mousein);
  }

  const showAgain = () =>{
    setShow(true);
  }


  return (
   <div className="relative overflow-hidden">
    {show && mousein ?   
    <div className="absolute top-[90px] arrowLeftMpDiv">
      <BsArrowLeft className="arrowLeftMoviePlayer" onClick={navigateBack}/>
    </div> 
    : null}
  
     <ReactPlayer
        className="videoMoviePlayer overflow-hidden"
        url="videos/netflix_intro.mp4"
        muted={true}
        playing={true} 
        controls={true}
        onReady={showControls}
        onPlay={showAgain}
        onPause={showAgain}
        onMouseLeave={showControlsOnLeave}
        onMouseOver={showControlsOnLeave}
      />
   </div>
  )
}

export default Play