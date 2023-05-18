import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { HashRouter } from 'react-router-dom';
import UserProvider from './UserProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <UserProvider>
    <App />
    </UserProvider>
    </HashRouter>
)
