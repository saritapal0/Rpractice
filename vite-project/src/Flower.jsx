import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


const FlowerCard = () => {
    const [flowerData, setFlowerData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const apiurl = 'https://api.pexels.com/v1/search?query=Dog'
    const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4'
     const navigate = useNavigate()
     const Click = ()=>{
        console.log('Click It')
        navigate('/Img')
     }

    useEffect(() => {
        function Print() {
            axios.get(apiurl,

                {
                    headers: {
                        "Authorization": apikey
                    }
                })
                .then(
                    response => {
                       console.log(response.data['photos'])
                        setFlowerData(response.data['photos'])
                        setLoading(false)
                    }
                )

        }
        Print()
    }, [])

    if (isLoading) {
        return (<div className='logo'>
           
           <img
        src="web.webp"
        alt=""

      />    

           
        </div>)
    } else {

        return (

            <Stack spacing={2} direction='column'>
                {flowerData.map((post) => (


                    <Card key = {post.id} sx={{ maxWidth:300  }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 200, width: 300 }}
                                component="img"
                                height="140"
                                image={post.src.tiny}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.photographer}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.alt}
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    </Card>
                    ))}
                    <Button type = 'Button' onClick={Click}>
                        Click Me
                    </Button>
                    <Link to = '/User'>
                        This is a link
                    </Link>
                
            </Stack>

        );
    }
}
export default FlowerCard  
