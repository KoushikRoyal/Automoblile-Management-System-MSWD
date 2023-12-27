import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import '../App.css'
import bike from './Images/bike.jpg';
import cars from './Images/cars.jpg';
import ship from './Images/ship.jpg';
import flight from './Images/flight.jpg';

 function Home3() {
  return (
    <div className='Home3_main'>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link to="/Servicebike" style={{textDecoration:"none", color:"ButtonFace"}}>
      <img src={bike} align="left" style={{width:"115px",height:"185px"}}/>
      <Button variant="solid" ><h1>Bike</h1></Button>
      </Link>
      <Link to="/Servicecar" style={{textDecoration:"none", color:"ButtonFace"}}>
      <img src={cars} align="left" style={{width:"165px",height:"185px"}}/>
      <Button variant="solid"><h1>Car</h1></Button>
      </Link>
      <Link to="/Serviceship" style={{textDecoration:"none", color:"ButtonFace"}}>
      <img src={ship} align="left" style={{width:"165px",height:"185px"}}/>
      <Button variant="solid"><h1>Ship</h1></Button>
      </Link>
      <Link to="/Serviceaero" style={{textDecoration:"none", color:"ButtonFace"}}>
      <img src={flight} align="left" style={{width:"165px",height:"185px"}}/>
      <Button variant="solid"><h1>Aeroplane</h1></Button>
      </Link>
    </Box>
    </div>
  );
}
export default Home3;
