import play from '../assets/play.png'
// import volume from '../assets/volume.png'
// import pause from '../assets/pause.png'
import next from '../assets/next.png'
import { songsData } from '../assets/asset'
import prev from '../assets/prev.png'
import loop from '../assets/loop.png'
import shuffle from '../assets/shuffle.png'
import { usePlayer } from '../Context/PlayerContext'

export const Player =()=> {
  const players:any = usePlayer()
  return <div>
      {
        players.player.name?
        
        <div className='w-auto mt-[-6%] h-35 gap-4 bg-black flex items-center text-white'>
         <div className='flex items-center ml-8'>
        <img className='w-20 h-20' src={players.player.image} alt={players.player.name}/>
        <div className='ml-2'>
        <p className='font-bold mt-10'>{players.player.name}</p>
        <p className='text-slate-200'>{players.player.disc}</p>
        </div>

            </div>
        
            </div>:null
      }
        
        </div>
    
  
}

