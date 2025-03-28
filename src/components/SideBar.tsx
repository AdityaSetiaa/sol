import { useState } from 'react'
import { usePlayer } from '../Context/PlayerContext'
import { NavLink } from 'react-router-dom'
function SideBar() {
  const [playlist, setPlaylist]= useState<any>([])
  const play = usePlayer()
  const createPlaylist = (value:string) =>{
    setPlaylist([...playlist, value])

  }
    
  
  return (
    <div className='w-[20%] h-[86%] p-2 flex-col gap-2 text-white hidden lg:flex'>
    
    
      <div className='bg-black h-[15%] rounded flex flex-col justify-around border-2 border-red-950'>
        <div className='flex item-center gap-3 pl-8 cursor-pointer'>
        <NavLink to={'/Home'} className='font-bold'>Home</NavLink>
            {/* <img className='w-6' src={assets.home_icon} alt='home_icon'/> */}
           
        </div>
        <div className='flex item-center gap-3 pl-8 cursor-pointer'>
            {/* <img className='w-6' src={assets.search_icon} alt='home_icon'/> */}
            
            <NavLink to={'/Added'} className='font-bold'>Liked</NavLink>
        </div>
      </div>
      <div className='bg-black h-[100%] rounded border-2 border-red-950 '>
        <div className='p-4 flex item-center justify-between'>
            <div className='flex item-center gap-3'>
                {/* <img className='w-8' src={assets.stack_icon} alt="" /> */}
                <p className='font-semibold'>Library</p>
                
            </div>
            
            <div className='flex item-center gap-3'>
                {/* <img className='h-5 w-5' src={assets.arrow_icon} alt="" /> */}
                {/* <img className='h-5'src={assets.plus_icon} alt="" /> */}
            </div>
        </div>
        <div className='p-4 bg-red-950 w-right-50 w-left- 2m-2 rounded font-semibold flex flex-col items-start gap-1 p1-4'>
            <h1>Create <span className='text-red-500'>your </span>playlist</h1>
            <button className='p-4 bg-white text-slate-950 m-2 rounded-full font-semibold flex flex-col items-start gap-1 p1-4'>Create playlist</button>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar