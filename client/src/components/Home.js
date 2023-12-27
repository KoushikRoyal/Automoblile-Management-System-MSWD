import React from 'react'
import Cards from './Cards'
import bike from './Images/bike.jpg';
import car from './Images/car.jpg';
import ship from './Images/ship.jpg';
import flight from './Images/flight.jpg';
const Home = () => {
  return (
    <div className="home_maindiv">
        <div className="home_1stdiv"><h1>AUTOMOBILE MANAGEMENT SYSTEM</h1></div>
        <div className="cardss"><Cards name={'Bike'} about={'Service related to bikes'} imgsrc={bike} />
    <Cards  name={'Cars'} about={'Service related to cars'} imgsrc={car}/>
    <Cards name={'Ship'} about={'Service related to ships'} imgsrc={ship}/>
    <Cards name={'Aeroplane'} about={'Service related to airways '} imgsrc={flight}/></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br><br></br>
    </div>
  )
}

export default Home;