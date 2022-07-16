import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="w-full h-screen">
      <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/23df31f8-deed-416a-8958-a2aab3b3da48/ES-es-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background Netflix" />

      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form className="w-full flex flex-col py-4">
              <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autocomplete="email" />
              <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autocomplete="current-password" />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p><input className="mr-2" type="checkbox" />Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className="py-8"><span className="text-gray-600">New to Netflix?</span> <Link to="/signup">Sign Up</Link></p>
            </form>
          </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Login