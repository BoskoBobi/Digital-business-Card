import React from "react"
import Picture from "../assets/info-images/programer.jpg"
import iconE from "../assets/info-images/Envelope-Mail-Transparent.png"
import iconL from "../assets/info-images/linkedIn_logo.png"

export default function Info() {
  return (
    <header className="header--container">
      <img className="profile--picture" src={Picture} />
      <h1 className="profile--name">Boban Boskovski</h1>
      <h2 className="profile--role">Frontend Developer</h2>
      <h3 className="profile--web">bobanbosko.website</h3>
      <section className="buttons">
        <button className="email--button">
          <img className="email--logo" src={iconE} />
          <p className="email_text">Email</p>
        </button>
        <button className="linkedin--button">
          <img className="linkedin--logo" src={iconL} />
          <p className="linkedin_text">LinkedIn</p>
        </button>
      </section>
    </header>
  )
}