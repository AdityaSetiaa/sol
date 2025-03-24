import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.tsx'
import Home from './components/Home.tsx'
import PlayerContext from './Context/PlayerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContext>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>  
      </PlayerContext>
    </BrowserRouter>
  </StrictMode>,
)
