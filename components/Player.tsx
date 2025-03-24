import play from '../assets/play.png'
// import volume from '../assets/volume.png'
// import pause from '../assets/pause.png'
import next from '../assets/next.png'
import plays from '../assets/plays.png'
import pause from '../assets/pause.png'
import mic from '../assets/mic.png'
import queue from '../assets/queue.png'
import speaker from '../assets/speaker.png'
import volume from '../assets/volume.png'
import mini_player from '../assets/mini-player.png'
import zoom from '../assets/zoom.png'
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
        <img className='w-25 h-25' src={players.player.image} alt={players.player.name}/>
        <div className='ml-3 mt-5'>
        <p className='font-bold mt-10'>{players.player.name}</p>
        <p className='text-slate-200'>{players.player.disc}</p>
        </div>

            </div>
        <div className='fixed ml-220 mr-20 mt-[-2%] p-4 justify-center w-auto flex gap-4 duration-300'>
                <img className='w-4 cursor-pointer' src={shuffle} alt="" />
                <img className='w-4 cursor-pointer' src={prev} alt="" />
              <div> {players.status? 
                <img onClick={players.pause} className='w-4 cursor-pointer' src={pause} alt="" />:
                <img onClick={players.play} className='w-4 cursor-pointer' src={play} alt="" />
}</div>
                <img className='w-4 cursor-pointer' src={next} alt="" />
                <img className='w-4 cursor-pointer' src={loop} alt="" />
                <audio id="audio" ref={players.audioRef} src={players.trackIndex.file}  autoPlay></audio>
                
            </div>
           <div className='fixed ml-179 mt-4 flex items-center gap-2'>
            <div>0.00</div>
           <div ref=
          {players.seekFill}className='w-110 bg-slate-50 h-1 rounded'>
                <div ref={players.seekBar}className='w-1 h-1 bg-red-900 rounded'></div>
           </div>
           <div className='text-white'>{players.player.duration}</div>

           </div>
            <div className='hidden absolute right-0 lg:flex items-center gap-2 opacity-65 ml-10 mr-5'>
            <img className='w-4' src={plays} alt="" />
            <img className='w-4' src={mic} alt="" />
            <img className='w-4' src={queue} alt="" />
            <img className='w-4' src={speaker} alt="" />
            <img className='w-4' src={volume} alt="" />
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img className='w-4' src={mini_player} alt="" />
            <img className='w-4' src={zoom} alt="" />

           

        </div>
            </div>:null
            
      }
        
        </div>
    
  
}

