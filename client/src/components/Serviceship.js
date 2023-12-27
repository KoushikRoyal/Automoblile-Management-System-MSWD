import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Serviceship() {
  const [lg,setlg]=useState(0);
  const [tg,settg]=useState(0);
  const [yg,setyg]=useState(0);
  const [ug,setug]=useState(0);
  return (
    <div className="SPaero_img">
    <div className='servcebike_main'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Link to='/SPship'>
      <button><Item>Spare parts</Item></button> </Link> 
      <Item><button onClick={()=>{setlg(lg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Ticket booking : {lg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setlg(lg-1)}}> -</button> <br></br> Price : {lg*1000}</Item>
       <Item><button onClick={()=>{settg(tg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Body Repair : {tg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{settg(tg-1)}}>-</button><br></br> Price : {tg*1000}</Item>
       <Item><button onClick={()=>{setyg(yg+1)}}>+</button> &nbsp;&nbsp;&nbsp;&nbsp;Ac Services : {yg}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setyg(yg-1)}}>-</button><br></br> Price : {yg*1000}</Item>
       <Item><button onClick={()=>{setug(ug+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Track service personal : {ug}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setug(ug-1)}}>-</button><br></br> Price : {ug*1000}</Item>
      </Stack></div>
    </div>
  );
}
