import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/Home/style.css'
import Home from './pages/Home/index.jsx'
import Login from './pages/login/index.jsx'
import TestePagina from './pages/test/teste.jsx'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/teste" element={<TestePagina />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
