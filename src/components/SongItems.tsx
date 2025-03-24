import { usePlayer } from '../Context/PlayerContext'

interface SongItemsProps {
  image: string
  name: string
  disc: string
  duration: any
}

function SongItems({image, name, disc, duration}: SongItemsProps) {
  const players:any = usePlayer()
  return (
    <div className='backdrop-blur rounded flex flex-col duration-500
          h-auto border-red-950 border-2 p-5 py-0.5 hover:shadow-2xl hover:shadow-red-700 hover:duration-600 hover:border-red-600 ' onClick={()=>players.setPlayer({name, image, disc , duration})

          } >
    <img className='rounded border-[100%] hover:size-90 ' height="40px" width="40px" src={image} alt={name}/>
    <div className=''>
    <p className='font-bold mt-2 mb-1 overflow-ellipsis '>{name}</p>
    <p className='text-slate-200 w-18 overflow-ellipsis '>{disc}</p></div>
    </div>
  )
}

export default SongItems