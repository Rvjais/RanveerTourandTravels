import React from 'react'
import Mainpic from '../../assets/Prayagraj-Allahabad-Sangam.jpg'
import '../Hero/Hero.css'
const Hero = () => {
  return (
   <>
<div className="card bg-dark text-white">
  <img src={Mainpic} className="card-img " alt="Background image"/>
  <div class="card-img-overlay position-absolute top-50 start-50 translate-middle text-center text-white texts">
    <h5 className="card-title">Welcome to Prayagraj</h5>
    <p className="card-text">Place To Purifiy Your Soul your body and your mind</p>
  </div>
</div>
   </>
  )
}

export default Hero