import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Spots from './components/Spots/Spots'
import Hotel from './components/Hotel/Hotel'
import Footer from './components/Footer/Footer'
import CarRentals from './components/CarRentals/CarRentals'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/CarRentals" element={<CarRentals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App