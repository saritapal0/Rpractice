import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

// const data = [
//   { id: 1, title: 'India', content: 'Explore India', image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/08/16/2530467-flag.jpg", countryId: 'India' },
//   { id: 2, title: 'New York', content: 'Explore New York', image: "https://c8.alamy.com/comp/2J7FDD5/the-new-york-state-flag-waving-along-with-the-national-flag-of-the-united-states-of-america-in-the-background-there-is-a-clear-sky-new-york-is-a-sta-2J7FDD5.jpg", countryId: 'NewYork' },
//   { id: 3, title: 'Russia', content: 'Explore Russia', image: "https://www.shutterstock.com/image-photo/large-flag-russian-federation-on-260nw-2340622767.jpg", countryId: 'Russia' },
//   { id: 4, title: 'Japan', content: 'Explore Japan', image: "https://media.istockphoto.com/id/1296663511/photo/flag-of-japan.webp?b=1&s=170667a&w=0&k=20&c=F-gmB4k651xxnKeU_Sb6quUxE25k4kBDKRMbzRhL_4c=", countryId: 'Japan' },
//   { id: 5, title: 'America', content: 'Explore America', image: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countryId: 'America' },
//   { id: 6, title: 'Canada', content: 'Explore Canada', image: "https://www.hindustantimes.com/ht-img/img/2023/11/02/550x309/As-public-opinion-in-the-country-turns-against-hig_1698952675001.jpg", countryId: 'Canada' },
// ];



const Img = ()=>{
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
          image={post.image}
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
export default Img  
