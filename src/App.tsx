import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
   
       <main className="min-h-screen flex bg-gradient-to-r from-slate-900 to-slate-950 text-while text-white text-sm sm:text-base">
        <Navbar/>
       </main>
   
  )
}

export default App
