import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from './contexts/UserContext.jsx';
import {ThemeProvider as MyThemeProvider} from './contexts/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <MyThemeProvider>
                       <App/>
                </MyThemeProvider>   
            </UserProvider> 
        </BrowserRouter>  
  </StrictMode>
); // pro user provider ter acesso aos recursos de navegação como o hook useNavigate, ele precisa estar envolvido por um BrouserRouter ou RouterProvider
