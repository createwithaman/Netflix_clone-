import React from 'react'
import "./Footer.css"
import youtubeIcon from "../../assets/youtube_icon.png"
import twitterIcon from "../../assets/twitter_icon.png"
import InstagramIcon from "../../assets/instagram_icon.png"
import facebookIcon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={InstagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul>
      
        <li>Account</li>
        <li>Legal Notices</li>
        <li>Speed Test</li>
        <li>Only on Netflix</li>
        <li>Contact Us</li>
        <li>Corporate Information</li>
        <li>Privacy</li>
        <li>Terms of Use</li>
        <li>Ways to Watch</li>
        <li>Buy Gift Cards</li>
        <li>Redeem Gift Cards</li>
        <li>Audio Description</li>
      </ul>
      <p className="copyRight-text">&copy; Questions? Call 1-844-505-2993</p>
    </div>
  )
}

export default Footer