import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from '../Movies/Movie'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])
    const [sliderLeft, setSliderLeft] = useState(false)

    useEffect(() =>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    }, [fetchURL])

   const slideLeft = () =>{
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;

    if(slider.scrollLeft <= 500){
        setSliderLeft(false)
    }
   }

   const slideRight = () =>{
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
    setSliderLeft(true);
   }

 

  return (
    <>
    <h2 className="text-white font-bold text-xl md:text-base sm:text-base smler:text-base p-4 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5">{title}</h2>
    <div className="relative flex items-center group 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5">
        {sliderLeft ? <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} /> : null}
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((item, id) => (
                <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} />
    </div>
    </>
  )
}

export default Row