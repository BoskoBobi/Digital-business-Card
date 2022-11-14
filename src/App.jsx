import React from "react"
import "./styles/General.css"
import "./styles/Info.css"
import "./styles/About-Interests.css"
import "./styles/Footer.css"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="main-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}