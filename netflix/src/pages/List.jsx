import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">

        {/* <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/23df31f8-deed-416a-8958-a2aab3b3da48/ES-es-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background Netflix" /> */}
        <div className="bg-black/60 top-0 left-0 w-full h-[170px]">
         <div className="absolute top-[10%] 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5">
            <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg smler:text-lg font-bold">My List</h1>
          </div>
        </div>
          
      </div>
      <SavedShows />
    </>
  )
}

export default Account