import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
   <Link to='Home2'> <Card sx={{ maxWidth: 345 }}>
   <CardActionArea>
     <CardMedia
       component="img"
       height="340"
       image={props.imgsrc}
       alt={props.name}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {props.name}
         <br/>
         {props.about}
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card></Link>
  );
}
