import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link, redirect } from 'react-router-dom';
import Finalpayment from './Finalpayment';
import { useState,useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Servicecar() {
  const [lg,setlg]=useState(0);
  const [tg,settg]=useState(0);
  const [yg,setyg]=useState(0);
  const [ug,setug]=useState(0);
  const[cost,setcost]=useState(1000);
  const[total,settotal]=useState(0);
  var totals=0

  useEffect(()=>{
    settotal(()=>lg*cost+tg*cost+yg*cost+ug*cost);
   },[lg,tg,yg,ug]);

  return (

    <div className="SPaero_im">
    <div className='servcebike_main'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Link to='/SPcar'>
      <button><Item>Spare parts</Item></button>  </Link>
      <Item><button onClick={()=>{setlg(lg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Brake, Clutch And Suspension : {lg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setlg(lg-1)}}>-</button><br></br> Price : {lg*1000}</Item>
       <Item><button onClick={()=>{settg(tg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Body Repair : {tg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{settg(tg-1)}}>-</button><br></br> Price : {tg*1000}</Item>
       <Item><button onClick={()=>{setyg(yg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Ac Services : {yg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setyg(yg-1)}}>-</button><br></br> Price : {yg*1000}</Item>
       <Item><button onClick={()=>{setug(ug+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Battery Care : {ug}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setug(ug-1)}}>-</button><br></br> Price : {ug*1000}</Item>  
      </Stack></div>
      <Link to='/Finalpayment'><button on onClick={()=>{localStorage.setItem("price",total);localStorage.setItem('item1'," Brake, Clutch And Suspension");localStorage.setItem('item1_price',(lg*cost));localStorage.setItem('item2'," Body Repair");localStorage.setItem('item2_price',(tg*cost));
                                                          localStorage.setItem('item3',"  Ac Services  ");localStorage.setItem('item3_price',(yg*cost));
                                                          localStorage.setItem('item4'," Battery Care");localStorage.setItem('item4_price',(ug*cost))}}>click</button></Link>
     <br/>
     <br/>
    </div>
  );
}
