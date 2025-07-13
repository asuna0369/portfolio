import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllProjects from './Components/MyWork/AllProjects'
import ServicesDetail from './Components/ServicesDetail/ServicesDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/services-detail" element={<ServicesDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
