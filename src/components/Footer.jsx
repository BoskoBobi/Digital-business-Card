import React from "react"
import iconT from "../assets/footer-images/twitter-logo.png"
import iconF from "../assets/footer-images/facebook-logo.png"
import iconI from "../assets/footer-images/instagram-logo.png"
import iconG from "../assets/footer-images/github-logo.png"

export default function Footer() {
  return(
    <main className="footer--container">
      <div className="footer--box">
        <img className="twitter--icon" src={iconT} />
      </div>
      <div className="footer--box">
        <img className="facebook--icon" src={iconF} />
      </div>
      <div className="footer--box">
        <img className="instagram--icon" src={iconI} />
      </div>
      <div className="footer--box">
        <img className="github--icon" src={iconG} />
       </div> 
    </main>
  )
}