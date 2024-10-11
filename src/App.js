import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Sales from './components/Sales';
import Order from './components/Order';
import Profit from './components/Profit';

import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
            <Routes>
                <Route path="/" element={<Login />} />      
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
            </Routes>
        </Router>
    </AuthProvider>
    
  );
}

export default App;
