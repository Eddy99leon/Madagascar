import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SidebarProvider from './contexts/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>,
)
