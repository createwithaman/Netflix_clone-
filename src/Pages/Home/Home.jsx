import React from 'react'
import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import hero from "../../assets/hero_banner.jpg"
import heroTitle from "../../assets/hero_title.png"
import playIcon from "../../assets/play_icon.png"
import infoIcon from "../../assets/info_icon.png"
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
      <div className="hero">
        <img className='banner-img' src={hero} alt="" />
        <div className="hero-caption">
          <img className='caption-img' src={heroTitle} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fugiat.</p>
          <div className="hero-btns">
            <button className='btn'><img src={playIcon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"}  category={"popular"}/>
        <TitleCards title={"Upcoming Movies"}  category={"upcoming"}/>
        <TitleCards title={"Only For you"}  category={"now_playing"}/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home