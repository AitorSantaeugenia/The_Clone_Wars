import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movie = ({item}) => {
    const [like, setLike] = useState([false])
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()
    let title = ""

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

  return (
    <>
    {/* Some movies or tvshows have no image (backdrop_path) that's why we do this ternary */}
    {item?.backdrop_path ? 
      <div className="2xl:w-[280px] xl:w-[280px] lg:w-[280px] md:w-[240px] sm:w-[200px] smler:w-[200px] inline-block cursor-pointer relative p-2 hover:z-40">
    <img className="w-full h-auto block" src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title ? item?.title : item?.name} />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title ? item?.title : item?.name}</p>
          <p onClick={saveShow}>
              { like ? <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> :  <FaHeart className="absolute top-4 left-4 text-gray-300" />}
          </p>
      </div>
  </div>: null}
  </>
  )
}

export default Movie