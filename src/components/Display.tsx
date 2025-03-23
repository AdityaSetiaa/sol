import { songsData } from '../assets/asset.ts'
import SongItems from './SongItems.tsx'
const Display = () => {
  songsData.map((song)=>console.log(song))
    
  return (
    <div className='w-[100%] m-2 px-6 pt-4 bg-gradient-to-tr from-black to-red-950 border-2 border-red-950 text-white overflow-auto lg:w-[80%] lg-ml-0 h-[84%]'>
      <div id='display' >
        {songsData.map((item, index)=>(<SongItems key={index} name={item.name} disc={item.desc} image={item.image}/>))}
      </div>
    </div>
  )
}

export default Display
