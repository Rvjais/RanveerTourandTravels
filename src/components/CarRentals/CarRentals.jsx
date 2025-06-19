import React from 'react'
import car from '../../assets/car.webp'
import "../CarRentals/CarRentals.css"
const CarRentals = () => {
  return (
    <>
    <div className="cars">
    <img src={car} alt="" className='car'/>
    <img src={car} alt="" className='car'/>
    <img src={car} alt="" className='car'/>
    </div>
    
    </>
  )
}

export default CarRentals