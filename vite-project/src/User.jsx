// TodosCard.js
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const User = () => {
  const [todosData, setTodosData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodosData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-logo">
        <h1>loading</h1>
      </div>
    );
  } else {
    return (
      <Stack direction="column" spacing={2}>
        {todosData.map((todo) => (
          <Card key={todo.id} sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {todo.id}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {todo.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {todo.completed ? 'Completed' : 'Not Completed'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  }
};

export default User;
