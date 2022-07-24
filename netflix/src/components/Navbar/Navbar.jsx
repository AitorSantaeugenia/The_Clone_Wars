import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {UserAuth} from "../../context/AuthContext"
import "./Navbar.css"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const [scroll, setScroll] = useState(false);
  // console.log(user)

  const handleLogout = async () => {
      try{
        await logOut()
        navigate("/")
      }catch(error){
        console.log(error)
      }     
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);


  return (
    <div className={scroll ? "flex items-center px-4 z-[100] justify-between w-full fixed bg-black": "flex items-center justify-between px-4 z-[100] w-full fixed bg-black bg-opacity-10"}>
      {user ?
      <NavLink to="/browse">
      <nav className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
      </nav>
      </NavLink>
      : 
      <NavLink to="/">
      <nav className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
      </nav>
      </NavLink>
      }
      {user?.email ? (
      <>
      <div className="buttonsNavbar">
        <NavLink to="/browse" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <button className="pr-4 hover:text-gray-400">Home</button>
        </NavLink>
        <NavLink to="/shows" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <button className="pr-4 hover:text-gray-400">TV Shows</button>
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <button className="pr-4 hover:text-gray-400">Movies</button>
        </NavLink>
        <NavLink to="/recently" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <button className="pr-4 hover:text-gray-400">Recently Added</button>
        </NavLink>
        <NavLink to="/account" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <button className="pr-4 hover:text-gray-400">My list</button>
        </NavLink>
      </div>
      <div className="buttonsNavbar">
          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
      </div>
      </>
       ) : (
        <div className="buttonsNavbar">
        <Link to="/login">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
        </Link>
      </div>
       ) }
    </div>
  )
}

export default Navbar