import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import royalenfieldSP from './Images/royalenfieldSP.png';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SPbike() {
  const [lg,setlg]=useState(0);
  const [tg,settg]=useState(0);
  const [yg,setyg]=useState(0);
  const [ug,setug]=useState(0);
  return (
    <div className="SPaero_img">
              <div className='royalenfieldSP_main'>
        <img src={royalenfieldSP} alt="spareparts" style={{height:"500px" ,width:"500px"}}/>
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
      </Stack>
      </div>

    </div>
  );
}
