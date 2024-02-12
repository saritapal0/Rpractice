import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import React from 'react'

export default function Error() {
  return (
    <div className='App'>
       <>
         <CardMedia
        sx={{height:400 , width:450 }}
          component="img"
          height="140"
          image="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg"
          alt="green iguana"
        />
        </>
        
        <button onClick="">Click Me</button>
    </div>
  )
}
