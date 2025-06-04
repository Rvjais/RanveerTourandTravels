import React from 'react'
import Hotelpic from '../../assets/Sapphire.jpg'
import Demo from '../../assets/demo.jpeg'
import '../Hotel/Hotel.css'
import hotel2 from '../../assets/hotel2.jpeg'
import room1 from '../../assets/room.jpeg'
import room2 from '../../assets/room2.jpeg'
const Hotel = () => {
  return (
    <>
      <div >
       <div className="top">
         <img   src={Hotelpic} className="card-img hotelpic" alt="Background image"/>
        <div className="description">
          <p className='Hotelpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis quisquam nisi aut! Quis laudantium natus doloribus praesentium iusto minus possimus suscipit autem, dolor ad eveniet nobis amet, a nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit totam iste quisquam aliquam ratione earum esse cumque nemo, rerum aspernatur repellendus sunt ad corrupti aperiam suscipit. Rem, consequuntur omnis.
          Aliquam molestias est, rerum, qui odio voluptatem eos, expedita alias error libero explicabo illum perspiciatis hic magnam eius. Adipisci debitis eveniet iusto! Aliquid itaque repellat nisi saepe earum aspernatur sapiente!</p>
        </div>
       </div>
        <div className="heading">
           <h2 className="gallery">Gallery</h2>
        </div>
       

         <div className="images">

         <img className='image' src={room1} alt="" />
         <img className='image' src={room2} alt="" />
         <img className='image' src={hotel2} alt="" />
         <img className='image' src={Demo} alt="" />
         </div>
        </div>
      
    </>
  )
}

export default Hotel