import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import airplaneSP from './Images/airplaneSP.jpg';
import { useState } from 'react';
import '../App.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function SPaero() {
    const [lg,setlg]=useState(0);
    const [em,setem]=useState(0);
    const [ed,seted]=useState(0);
    const [fl,setfl]=useState(0);
  return (
    
    <div className="SPaero_img">
              <div className='royalenfieldSP_main'>
        <img src={airplaneSP} alt="spareparts" style={{height:"500px" ,width:"500px"}}/>
    </div>
        <div className='SPbike_body'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
    
      <Item><button onClick={()=>{setlg(lg+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;Landing Gear {lg} &nbsp;&nbsp;&nbsp;&nbsp;<button  onClick={()=>{setlg(lg-1)}}>-</button><br></br> Price : {lg*1000}</Item>
      <Item><button onClick={()=>{setem(em+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp; Engine Mount {em} &nbsp;&nbsp;&nbsp;&nbsp;<button  onClick={()=>{setem(em-1)}}>-</button><br></br> Price : {em*1000}</Item>  
      <Item><button onClick={()=>{seted(ed+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp; Engine Disc {ed} &nbsp;&nbsp;&nbsp;&nbsp;<button  onClick={()=>{seted(ed-1)}}>-</button><br></br> Price : {ed*1000}</Item>
      <Item><button onClick={()=>{setfl(fl+1)}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp; Fuse Lage {fl} &nbsp;&nbsp;&nbsp;&nbsp;<button  onClick={()=>{setfl(fl-1)}}>-</button><br></br> Price : {fl*1000}</Item>
      </Stack>
      </div>
    </div>
  );
}
