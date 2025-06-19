import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <>
     <div className="nav">
      <h3 className="logo"></h3>
        <div className="navlinks">
            <Link to="/" className="nav-link">Home</Link>
          <Link to="/Tourspots" className="nav-link">Tour Spots</Link>
          <Link to="/hotel" className="nav-link">Hotel</Link>
          <Link to="/CarRentals" className="nav-link">Car Rentals</Link>
        </div>
     </div>
    </>
  )
}

export default Navbar