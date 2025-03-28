// import { songsData } from '../assets/asset.ts'
import SongItems from './SongItems.tsx'
import { usePlayer } from '../Context/PlayerContext.tsx'
const DisplayAdded = () => {
  const cart:any = usePlayer()
  
    console.log(cart.items
    )
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-gradient-to-tr from-black to-red-950 border-2 border-red-950 text-white overflow-auto lg:w-[80%] lg-ml-0 h-[84%]'>
      <div className='m-4 px-5 justify-center flex flex-col py-5 h-0  w-40 text-center bg-black border-2 border-red-950  rounded-4xl hover:text-red-600 hover:duration-200 '>Your songs</div>
      <div id='display' >
        {cart && cart.items.map((item:any, index:any)=>(<SongItems key={index} name={item.name} disc={item.desc} image={item.image} duration={item.duration} id={item.id}/>))}
      </div>
    </div>
  )
}

export default DisplayAdded
