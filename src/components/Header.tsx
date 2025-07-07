import sol from '../assets/sol.png'
import { NavLink } from 'react-router-dom'
import "../Styling/Style.css"

function Header() {
  // const [Search, setSearch] = useState([])
  
  return (
    <div className='flex flex-col'>
        <div className='w-full h-18  bg-black flex items-center justify-between'>
            <NavLink to={'/home'}> <img src={sol} alt="sol" className='w-30 ml-4 rounded-4xl'/></NavLink>
           
        </div>
        <div>
          {/*  */}
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header