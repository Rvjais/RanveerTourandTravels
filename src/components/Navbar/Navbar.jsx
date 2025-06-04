import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <>
     <div className="nav">
      <h3 className="logo">Veer-Travels</h3>
        <div className="navlinks">
            <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/hotel" className="nav-link">Hotel</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
     </div>
    </>
  )
}

export default Navbar