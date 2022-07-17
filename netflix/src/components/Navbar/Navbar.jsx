import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    <div className={scroll ? "flex items-center justify-between px-4 z-[100] w-full fixed bg-black": "flex items-center justify-between px-4 z-[100] w-full fixed bg-black bg-opacity-10"}>
      <Link to="/">
      <nav className="logo">
      <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
       </nav>
      </Link>
      {user?.email ? (
      <div className="buttonsNavbar">
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
        </div>
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