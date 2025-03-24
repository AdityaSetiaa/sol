import React from 'react'
import { usePlayer } from '../Context/PlayerContext'

function Side() {
    const players:any = usePlayer()
  return (
    <div>{
        players.player.name&&
        <div className='w-auto h-[84%] mt-2 gap-4 duration-500 backdrop-blur-2xl border-2 border-red-950 rounded items-center text-white duration-300'>
         <div className='flex flex-col m-2'>
        <img className='w-80' src={players.player.image} alt={players.player.name}/>
        <div className=''>
        <p className='font-bold text-2xl mt-4'>{players.player.name}</p>
        <p className='text-slate-200'>{players.player.disc}</p>
        
        </div>

            </div>
       
            </div>
    }</div>
  )
}

export default Side