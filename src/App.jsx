import React from 'react';
import './App.css';
import Login from './routes/Login';
import Register from './routes/Register';
import UserProfile from './routes/UserProfile';
import ErrorRoute from './routes/ErrorRoute';
import {Routes, Route, Navigate} from 'react-router-dom';

export default function App(){
  const authenticaded = true;
  return(
    <Routes>
        <Route path="/" element={authenticaded? <UserProfile/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/perfil" element={authenticaded? <UserProfile/> : <Navigate to="/login"/>}/>
        <Route path="*" element={<ErrorRoute/>}/>
    </Routes>
  );
}