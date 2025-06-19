import car from '../../assets/car.webp'
import car2 from '../../assets/car2.webp'
import "../CarRentals/CarRentals.css"

const CarRentals = () => {
  return (
    <>
    <div className="carpics">
  <div className="cars rightcars">
    <img src={car} alt="" className='car'/>
    <img src={car} alt="" className='car'/>
    
    </div>
    
    <div className="cars leftcars">
        <img src={car2} alt="" className="car" />
        <img src={car2} alt="" className="car" />
    </div>
    </div>
    </>
  )
}

export default CarRentals