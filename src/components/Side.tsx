// import React from 'react'
import { usePlayer } from '../Context/PlayerContext'

function Side() {
    const players:any = usePlayer()
  return (
    <div>{
        players.player.name&&
        <div className='w-auto h-[84%] mt-2 gap-4 backdrop-blur-2xl border-2 border-red-950 rounded items-center text-white duration-300'>
         <div className='flex flex-col m-2'>
        <img className='w-80' src={players.trackIndex.image} alt={players.player.name}/>
        <div className=''>
        <p className='font-bold text-2xl mt-4 ml-3'>{players.trackIndex.name}</p>
        <p className='text-slate-200'>{players.trackIndex.disc}</p>
        
        </div>

            </div>
       
            </div>
    }</div>
  )
}

export default Side