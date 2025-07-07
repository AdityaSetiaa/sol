import { usePlayer } from '../Context/PlayerContext'

interface SongItemsProps {
  image: string
  name: string
  disc: string
  duration: any
  id: number
}

function SongItems({image, name, disc, duration, id}: SongItemsProps) {
  const players:any = usePlayer()
  const {songId} = players
  return (
    <div  className='backdrop-blur w-40 rounded flex flex-col duration-500
          h-auto border-red-950 border-2 p-5 py-0.5 hover:duration-400 hover:border-red-600 item-edit ' onClick={()=>players.setPlayer({name, image, disc , duration, id},songId(id))

          } >
    <img className='rounded border-[100%] hover:size-90 ' height="40px" width="40px" src={image} alt={name}/>
    <div className=''>
    <p className='font-bold mt-2 mb-1 overflow-ellipsis '>{name}</p>
    <p className='text-slate-200 w-18 overflow-ellipsis '>{disc}</p></div>
    </div>
  )
}

export default SongItems