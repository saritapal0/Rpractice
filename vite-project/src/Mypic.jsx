import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';


const Mypic = ()=>{
  const [apiData, setApiData] = React.useState([])

  React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then((response)=> response.json())
    .then((data)=>setApiData(data))
    .catch((error)=> console.error('error' , error))
  },[])

  return (
  
       <Stack spacing={2} direction='row'>
       {apiData.map((post)=>(

      
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{height:200 , width:250}}
          component="img"
          height="140"
          image={post.Mypic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>

        
        
      </CardActionArea>
    </Card>
     ))}
    </Stack>

  );
}
export default Mypic  
