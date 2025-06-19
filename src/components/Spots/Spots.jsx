import React from "react";
import '../Spots/spots.css'
import tour1 from "../../assets/tour1.png";
import tour2 from "../../assets/tour2.webp";
import tour3 from "../../assets/tour3.webp";
import tour4 from "../../assets/tour4.webp";
import tour5 from "../../assets/tour5.webp";
import tour6 from "../../assets/tour6.webp";
import tour7 from "../../assets/tour7.avif";
import tour8 from "../../assets/tour8.webp";

const Spots = () => {
  return (
    <>
      <img src={tour1} className="tourimg" alt="" />
      <img src={tour2} className="tourimg" alt="" />
      <img src={tour3} className="tourimg" alt="" />
      <img src={tour4} className="tourimg" alt="" />
      <img src={tour5} className="tourimg" alt="" />
      <img src={tour6} className="tourimg" alt="" />
      <img src={tour7} className="tourimg" alt="" />
      <img src={tour8} className="tourimg" alt="" />
    </>
  );
};

export default Spots;
