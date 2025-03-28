import { songsData } from '../assets/asset.ts'
import SongItems from './SongItems.tsx'
import search from '../assets/search.png'
import { usePlayer } from '../Context/PlayerContext.tsx'
import { useState } from 'react'
const Display = () => {
  
  const playerContext = usePlayer()
  if (!playerContext) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
   const [searchsong, setSetSearch] = useState('')
      const handleSearch = async (e: React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          setSetSearch(searchsong)  
      }
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-gradient-to-tr from-black to-red-950 border-2 border-red-950 text-white overflow-auto lg:w-[80%] lg-ml-0 h-[84%]'>
      <div className='flex gap-x-102'>
      <div className='m-4 px-5 justify-center flex flex-col py-5 h-0  w-40 text-center bg-black border-2 border-red-950  rounded-4xl hover:text-red-600 hover:duration-200 '>songs</div>
      <form  id="input-container" onSubmit={handleSearch}className='flex items-center flex-row justify-center w-[50%]  mr-100'>
            
            
            <input type="text" className='bg-black border-2 fixed border-gray-700 max-w-200 rounded-3xl h-13 hover:duration-400 hover hover:border-2  hover:border-red-950 text-white text-2xl p-1.5 ml-4'  placeholder='Search your music' value={searchsong} onChange={(e)=>setSetSearch(e.target.value)}/>
            <button type="submit" className='bg-transparent hover:bg-gray-700 hover:text-white hover:duration-400 hover:rounded-3xl hover:border-2 hover:border-red-950 text-white text-2xl p-1.5 ml-4 mt-10 mb-5'>
            <img src={search} alt="icon" className=' ml-170 hover:cursor-pointer'/>
            </button>
            </form>
            </div>
      <div id='display' >
      {searchsong === ""?
        songsData.map((item, index)=>( item.name.toLowerCase().startsWith(searchsong) && <SongItems key={index} name={item.name} disc={item.desc} image={item.image} duration={item.duration} id={item.id}/>)):
          songsData.filter((item)=>item.name.toLowerCase().startsWith(searchsong.toLowerCase())).map((item, index)=>( item.name.toLowerCase().startsWith(searchsong) && <SongItems key={index} name={item.name} disc={item.desc} image={item.image} duration={item.duration} id={item.id}/>))
          
        }
      </div>
    </div>
  )
}

export default Display
