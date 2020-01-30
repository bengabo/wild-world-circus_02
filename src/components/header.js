import { Link } from "gatsby"
import React from "react"


const Header = () => (
  <header>
    <div className="container">
      <div className="innerHeader">
        <div className="logo">
          <Link to="/">wild gallery</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
