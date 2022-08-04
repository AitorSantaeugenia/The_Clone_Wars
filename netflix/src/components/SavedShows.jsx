import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <div className='relative flex items-center group 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5 text-center'>   
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item) => (
            <div
              key={item?.id + item?.title}
              className='2xl:w-[280px] xl:w-[280px] lg:w-[280px] md:w-[240px] sm:w-[200px] smler:w-[200px] inline-block cursor-pointer relative p-2 hover:z-40'
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <p onClick={()=> deleteShow(item?.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default SavedShows;