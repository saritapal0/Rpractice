import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  // Access the parameter directly
  const {Apple} = useParams();

  return (
    <div>
      <h1>Nikhil {Apple}</h1>
    </div>
  );
}