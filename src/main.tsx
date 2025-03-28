import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.tsx'
import Home from './components/Home.tsx'
import PlayerContext from './Context/PlayerContext.tsx'
import Added from './components/Added.tsx'
import { Player } from './components/Player.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContext>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Added' element={<Added/>}/>
      </Routes>  
      <Player/>
      </PlayerContext>
    </BrowserRouter>
  </StrictMode>,
)
