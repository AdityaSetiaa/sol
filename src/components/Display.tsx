import { songsData } from '../assets/asset.ts'
import SongItems from './SongItems.tsx'
// import search from '../assets/search.png'
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
    <div className='w-screen m-2 px- pt- rounded bg-gradient-to-tr from-black to-red-950 border-2 border-red-950 text-white overflow-auto h-[84%]'>
      <div className='flex '>
      <div className='m-4 px-5 justify-center flex flex-col py-5 h-0  w-40 text-center bg-black border-2 border-red-950  rounded-4xl hover:text-red-600 hover:duration-200 '>songs</div>
      <form  id="" onSubmit={handleSearch}className='flex items-center flex-row justify-center w-auto item-center'>
            
           <div className='flex flex-col relative w-100'>
            <input type="text" className='bg-black border-2 border-gray-700 rounded-3xl h-9 p-3 w-1/5 sm:w-2/5 md:w-3/5 lg:w-4/5 xl:w-full hover:duration-400 hover:border-2 hover:border-red-950 text-white ml-4'  placeholder='Search your music' value={searchsong} onChange={(e)=>setSetSearch(e.target.value)}/>
            {/* <button type="submit" className='bg-transparent absolute w-20 btn '>
            <img src={search} alt="icon" className=' hover:cursor-pointer h-6 mt-1 ml-1 w-1/5 sm:w-2/5 md:w-3/5 lg:w-4/5 xl:w-full'/>
            </button> */}
            </div> 
            </form>
            
            </div>
      <div id='display' className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 scroller m-5'>
      {searchsong === ""?
        songsData.map((item, index)=>( item.name.toLowerCase().startsWith(searchsong) && <SongItems key={index} name={item.name} disc={item.desc} image={item.image} duration={item.duration} id={item.id}/>)):
          songsData.filter((item)=>item.name.toLowerCase().startsWith(searchsong.toLowerCase())).map((item, index)=>( item.name.toLowerCase().startsWith(searchsong) && <SongItems key={index} name={item.name} disc={item.desc} image={item.image} duration={item.duration} id={item.id}/>))
          
        }
      </div>
    </div>
  )
}

export default Display
