import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Hello />
  </Router>
);