import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import User from './User';
import Client from './assets/Client';
import Admin from './Admin';
import Error from './Error';
import Product from './Product';
import Mypic from './Mypic';
import Img from './Img';
import FlowerCard from './Flower';
import Header from './Header'


const Hello = () => (
  <Routes>
     
      
      <Route path="/" element={<Admin />} />
      <Route path="/Client" element={<Client />}/>
      <Route path="/User" element={<User />} />
      <Route path="/Product" element={<Product />}/>
      <Route path="/Product/:Apple" element={<Product />}/>
      <Route path="*" element={<Error />} />
      <Route path="/Mypic" element={<Mypic/>} />
      <Route path="/Img" element={<Img/>} />
      <Route path="/Flower" element={<FlowerCard/>} />
      <Route path="/Header" element={< Header/>}/>
    </Routes>
);

export default Hello;
