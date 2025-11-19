import React from 'react';
import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom';

import Login from './routes/Login';
import Register from './routes/Register';
import UserProfile from './routes/UserProfile';
import ErrorRoute from './routes/ErrorRoute';
import ThemeButton from './components/ThemeButton';

import useAuth from './hooks/useAuth';
import useTheme from './hooks/useTheme';
import ProfileConfig from './routes/ProfileConfig.jsx';

import {ThemeProvider as StyledThemeProvider} from 'styled-components';

export default function App(){
  const {loggedInUser, isAuthenticaded} = useAuth(); // useAuth só funciona se o componente for envolvido pelo UserProvider
  const {theme, STYLES} = useTheme(); // useTheme só funciona se o componente for envolvido pelo MyThemeProvider

  return(
      <>
      <StyledThemeProvider theme={STYLES[theme.toUpperCase()]}> 
          <ThemeButton/>
          <Routes> 
              <Route path="/" element={isAuthenticaded? <Navigate to={`/usuario/${loggedInUser.id}`}/> : <Navigate to="/login"/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/registro" element={<Register/>}/>
              <Route path="/usuario/:id" element={isAuthenticaded? <UserProfile/> : <Navigate to="/login"/>}/>
              <Route path="/usuario/:id/config" element={isAuthenticaded? <ProfileConfig/> : <Navigate to="/login"/>}/>
              <Route path="*" element={<ErrorRoute/>}/>
          </Routes>
      </StyledThemeProvider>
      </>
  );


  /*
    Autenticação

    1 -  O usuário após registrar seus dados pode fazer login para acessar o perfil
    2 -  O hook useAuth retorna um objeto com a propriedade isAuthenticaded.
    3 -  Case exista um usuário logado (inserido no UserContext) isAuthenticaded retorna true
        e permite o acesso à página perfil gerada dinamicamente com os dados do usuário.

    Aplicação de temas

    1 -  O ThemeProvider que criei (com o aliás MyThemeProvider) controla o estado do tema atual em theme e os estilos em STYLES.
    2 -  O ThemeProvider do styled-components injeta a prop theme como um objeto de estilos em seus filhos.
    3 -  No App, o tema correposdente á string da variavel theme é inserido na prop theme do ThemeProvider do 
         styled-components (com o aliás StyledThemeProvider).
    4 -  Os estilos são aplicados dinamicamente nos componentes estilizados confome o tema do contexto.
  */
}