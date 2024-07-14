import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search_icon.svg"
import bellIcon from "../../assets/bell_icon.svg"
import profileImg from "../../assets/profile_img.png"
import  dropDownIcon from "../../assets/caret_icon.svg"
import { logOut } from '../../firebase'

const Navbar = () => {

  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")
        
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="nav-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
      </div>
      <div className="nav-right">
          <img className='icons' src={searchIcon} alt="" />
          <p>Children</p>
          <img className='icons' src={bellIcon} alt="" />
          <div className="nav-profile">
          <img className='profile' src={profileImg} alt="" />
          <img  src={dropDownIcon} alt="" />
          <div className="drop-down">
            <p onClick={()=>{logOut()}}>Sign Out of Netflix</p>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default Navbar