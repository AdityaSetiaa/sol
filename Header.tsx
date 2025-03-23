import sol from '../assets/sol.png'
import { NavLink } from 'react-router-dom'
import search from '../assets/search.png'
import "../Styling/Style.css"

function Header() {
  return (
    <div className='flex flex-col'>
        <div className='w-full h-20  bg-black flex items-center justify-between'>
            <NavLink to={'/home'}> <img src={sol} alt="sol" className='w-30 ml-4 rounded-4xl'/></NavLink>
            <div  id="input-container" className='flex items-center justify-center w-[60%]'>
            <img src={search} alt="icon" className='mt-5'/>

            <input type="text" className='bg-black border-2 border-gray-700 rounded-3xl mr-100 h-13 hover:duration-400 hover hover:border-2  hover:border-red-950 text-white text-2xl p-1.5 ml-4'  placeholder='Search your music' />
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header