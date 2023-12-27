import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import benzSP from './Images/benzSP.png';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';
import PriceTag from './PriceTag';
import Shifting2 from './Shifting2';
import Finalpayment from './Finalpayment';
import { useState,useEffect } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SPcar() {
  const [lg,setlg]=useState(0);
  const [tg,settg]=useState(0);
  const [yg,setyg]=useState(0);
  const [ug,setug]=useState(0);
  const[cost,setcost]=useState(1000);
  const[total,settotal]=useState(0);
  var bill={
    'rear brake pads':total
  }

  useEffect(()=>{
    settotal(()=>lg*cost+tg*cost+yg*cost+ug*cost);
   },[lg,tg,yg,ug]);


  return (
    <div>
              <div className='SPaero_img'>
        <img src={benzSP} alt="spareparts" style={{height:"500px" ,width:"500px"}}/>
    </div>
        <div className='SPbike_body'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
       <Item><button onClick={()=>{setlg(lg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Rear Brake Pads {lg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setlg(lg-1)}}>-</button><br></br> Price : {lg*1000}</Item>
       <Item><button onClick={()=>{settg(tg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Front Brake Pads {tg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{settg(tg-1)}}>-</button><br></br> Price : {tg*1000}</Item>
       <Item><button onClick={()=>{setyg(yg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Leg Guard {yg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setyg(yg-1)}}>-</button><br></br> Price : {yg*1000}</Item>
       <Item><button onClick={()=>{setug(ug+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Speedometer {ug}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setug(ug-1)}}>-</button><br></br> Price : {ug*1000}</Item>
       <Link to="/PriceTag" style={{textDecoration:"none", color:"ButtonFace"}}>
       <Button><h1>RATING OF THE SERVICES</h1></Button>
      </Link>
      
      <Link to="/Shifting2" style={{textDecoration:"none", color:"ButtonFace"}}>
  <Button><h1>Navigation</h1></Button>
   </Link>
   <Link to='/Finalpayment'><button on onClick={()=>{localStorage.setItem("price",total);localStorage.setItem('item1',"Rear Brake pad");localStorage.setItem('item1_price',(lg*cost));localStorage.setItem('item2',"Front Brake Pads");localStorage.setItem('item2_price',(tg*cost));
                                                          localStorage.setItem('item3',"Leg Guard ");localStorage.setItem('item3_price',(yg*cost));
                                                          localStorage.setItem('item4',"Speedometer");localStorage.setItem('item4_price',(ug*cost))
  }}>click</button></Link>

      </Stack>
      </div>
     
    </div>

  );
}
