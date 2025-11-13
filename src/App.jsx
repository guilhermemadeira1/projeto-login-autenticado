import React from 'react';
import './App.css';
import Login from './routes/Login';
import Register from './routes/Register';
import UserProfile from './routes/UserProfile';
import ErrorRoute from './routes/ErrorRoute';
import {Routes, Route, Navigate} from 'react-router-dom';
import useAuth from './hooks/useAuth';

export default function App(){
  const {loggedInUser, isAuthenticaded} = useAuth();
  return(
    <Routes>
        <Route path="/" element={isAuthenticaded? <Navigate to={`/usuario/${loggedInUser.id}`}/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/usuario/:id" element={isAuthenticaded? <UserProfile/> : <Navigate to="/login"/>}/>
        <Route path="*" element={<ErrorRoute/>}/>
    </Routes>
  );
}