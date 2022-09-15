import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
import {UserAuth} from "../../context/AuthContext"
import "./Navbar.css"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const [scroll, setScroll] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false)
  // We simulate netflix behaviour with the responsive menu, onMouseLeave and onClick to hidde the menu again
  const [displayMenuBoolean, setDisplayMenuBoolean] = useState(true)

  const handleLogout = async () => {
      try{
        await logOut()
        navigate("/")
      }catch(error){
        console.log(error)
      }     
  }

  const showMenu = () =>{
    setDisplayMenu(!displayMenu)
    setDisplayMenuBoolean(true)
  }

  const hideMenu = () =>{
    setDisplayMenuBoolean(!displayMenuBoolean)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
 
  return (
    <div className={scroll ? user?.email ? "flex items-center z-[100] w-full fixed bg-black 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5" : "flex items-center justify-between px-16 z-[100] w-full fixed bg-black 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5" : "flex items-center justify-between px-16 z-[100] w-full fixed bg-black bg-opacity-10 2xl:px-16 xl:px-16 lg:px-16 md:px-9 sm:px-9 smler:px-2.5"}>
      {user ?
      <NavLink to="/browse" className="mr-10">
      <nav className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
      </nav>
      </NavLink>
      : 
      <NavLink to="/" className="mr-10">
      <nav className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
      </nav>
      </NavLink>
      }
      {user?.email ? (
      <>
      <div className="buttonsNavbar mr-auto navbarMenu">
        <div onClick={showMenu} className="navbarArrowDown">
            <button className='active navlink'>Menu</button>
            <FaAngleDown className="text-[#c2c2c1] active self-center cursor-pointer ml-0.5" />
        </div>
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
          <NavLink to="/browse/my-list" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <button className="pr-4 hover:text-gray-400">My list</button>
          </NavLink>
      </div>

      {/* This replace the menu for a responsive design */}
      <div className={displayMenu && displayMenuBoolean ? 'buttonsNavbar mr-auto navBarMenuResponsive flex' : 'buttonsNavbar mr-auto navBarMenuResponsive hidden'} onMouseLeave={showMenu}>
        <NavLink to="/browse" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
          <button className="pr-4 hover:text-gray-400">Home</button>
        </NavLink>
        <NavLink to="/shows" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
          <button className="pr-4 hover:text-gray-400">TV Shows</button>
        </NavLink>
        <NavLink to="/movies" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
          <button className="pr-4 hover:text-gray-400">Movies</button>
        </NavLink>
        <NavLink to="/recently" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
          <button className="pr-4 hover:text-gray-400">Recently Added</button>
        </NavLink>
        <NavLink to="/browse/my-list" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
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