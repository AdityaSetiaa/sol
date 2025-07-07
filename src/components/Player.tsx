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

export const Player =(props:any)=> {
  const players:any = usePlayer()
  
  return <div className='flex flex-col' >
      {
        players.player.name?
        
        <div className='w-auto mt-[-8%] h-30 gap-4 p-4 bg-black flex items-center text-white'>
         <div className='flex items-center ml-8 '>
        <img className='w-20 h-20 p-2' src={players.trackIndex.image} alt={players.trackIndex.name}/>
        <div className='ml-3 mt-5'>
        <p className='font-bold mt-10'>{players.trackIndex.name}</p>
        <p className='text-slate-200'>{players.trackIndex.disc}</p>
        <button className='m-auto text-4xl mt-[-2.5%] justify-center text-center' onClick={()=>players.setItems([...players.items,{image:props.trackIndex.image , name:props.trackIndex.name, disc:props.trackIndex.disc }])}>+</button>
        </div>

            </div>
            <div className='flex flex-col item-center justify-center mx-50'>
        <div className=' items-center mr-20 mt-[-2%] p-4 w-auto flex gap-4 duration-300 item-center m-9 ml-40 '>
                <img className='w-4 cursor-pointer' onClick={players.random} src={shuffle} alt="" />
                <img className='w-4 cursor-pointer' onClick={players.prev}src={prev} alt="" />
              <div> {players.status? 
                <img onClick={players.pause} className='w-4 cursor-pointer' src={pause} alt="" />:
                <img onClick={players.play} className='w-4 cursor-pointer' src={play} alt="" />
}</div>
                <img className='w-4 cursor-pointer' onClick={players.next} src={next} alt="" />
                <img className='w-4 cursor-pointer' src={loop} alt="" />
                <audio id="audio" ref={players.audioRef} src={players.trackIndex.file}  autoPlay></audio>
                
            </div>
          <div className='fixed mt-4 flex items-center gap-2'>
            <div>{players.time.currentTime.min}:{players.time.currentTime.sec}</div>
          <div ref=
          {players.seekFill}className='w-110 bg-slate-50 h-1 rounded fixed ml-8'>
                <div ref={players.seekBar}className='w-1 h-1 bg-red-900 rounded'></div>
          </div>
          <div className='text-white fixed ml-120'>{players.trackIndex.duration}</div>

          </div>
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

