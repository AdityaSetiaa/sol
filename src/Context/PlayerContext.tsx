import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/asset';

export interface PlayerContextType {
    player: any;
    setPlayer: React.Dispatch<React.SetStateAction<any>>;
    audioRef: React.RefObject<HTMLAudioElement>;
    seekBar: React.RefObject<any>;
    seekFill: React.RefObject<any>;
    volumeBar: React.RefObject<any>;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
    random: () => void,
    trackIndex: any;
    setTrackIndex: React.Dispatch<React.SetStateAction<any>>;
    time: {
      currentTime: {
        sec: number,
        min: number
      },
      totalTime: {
        sec: number,
        min: number
      }
    };
    setTime: React.Dispatch<React.SetStateAction<{
      currentTime: {
        sec: number,
        min: number
      },
      totalTime: {
        sec: number,
        min: number
      }
    }>>;
    play: () => void;
    pause: () => void;
    songId: (id: number) => Promise<void>;
    next: () => Promise<void>;
    prev: () => Promise<void>;
    items: any[];
    setItems: React.Dispatch<React.SetStateAction<any[]>>;
    add: (song: any) => void;
    remove: (songId: number) => void;
    added: () => boolean;
}
export const PlayerCon = createContext<PlayerContextType | undefined>(undefined)
export const usePlayer = () => {
    const context = React.useContext(PlayerCon)
    return context
}
function PlayerContext(props: any) {
  const [items, setItems] = useState<any[]>([])

    const [player, setPlayer] = useState([])
    const audioRef = useRef({} as HTMLAudioElement)
    const  seekBar = useRef<HTMLDivElement>(null!)
    const seekFill = useRef(null)
    const volumeBar = useRef(null)
    const [status, setStatus] = useState(false)
    const [trackIndex, setTrackIndex] = useState(songsData[0])
    const[ time , setTime ] = useState(
      {
        currentTime: {
          sec:0,
          min:0
        },
        totalTime: {
          sec:0,
          min:0
        }
        
      }
    )
    const play =()=>{
      audioRef.current.play();
      setStatus(true)
    }
    const pause =()=>{
      audioRef.current.pause();
      setStatus(false)
    }
    
    
    useEffect(() => {
      const audio = audioRef.current;
      
      audio.ontimeupdate = () => {
    
       
          seekBar.current.style.width = Math.floor(audio.currentTime / audio.duration * 100) + '%'
        
        
        setTime(prev => ({
          currentTime:{
            sec: Math.floor(audio.currentTime % 60),
            min: Math.floor(audio.currentTime / 60)
          },
          totalTime: prev.totalTime
        }))
      }
    
    },[audioRef.current.currentTime])

    const songId = async (id: number) => {
      await setTrackIndex(songsData[id])
      await audioRef.current.play()
      setStatus(true)
     
    }
    const random = ()=>{
      const randomIndex = Math.floor(Math.random() * songsData.length)
      setTrackIndex(songsData[randomIndex])
    }
    
    const next = async ()=>{
      if(trackIndex.id >= songsData.length-1){

        await setTrackIndex(songsData[songsData.length - 1])}
        else if (trackIndex.id >= 0 && trackIndex.id < songsData.length - 1) {
          await setTrackIndex(songsData[trackIndex.id + 1]);
          if (audioRef.current) {
            await audioRef.current.play();
          }
          setStatus(true);
        }
    }
    const prev = async ()=>{
      if(trackIndex.id <= 0){
        await setTrackIndex(songsData[0])}
      if(trackIndex.id > 0){
        await setTrackIndex(songsData[trackIndex.id-1])
        await audioRef.current.play()
        setStatus(true)
      }
    }

    useEffect(()=>{
      const stored:any = localStorage.getItem("items")
      if(stored) setItems(JSON.parse(stored))
    },[])

    useEffect(()=>{
      localStorage.setItem('items', JSON.stringify(items))
    })
    const add =(song:any)=>{
        setItems(prev => [...prev,song])
    }
    const remove =(songId:number)=>{
      setItems(prev => prev.filter(song => song.id !== songId))
    }
    const added=()=>{
      return items.some(song =>song.id === songId)
    }
  return (
    <PlayerCon.Provider value={{ audioRef,
      songId,
      seekBar,
      next,
      items,
      setItems,
      prev,
      seekFill,
      random,
      volumeBar,
      add,
      remove,
      added,
      player,
      setPlayer,
      setStatus,
      status,
      trackIndex,
      setTrackIndex,
      time,
      setTime,
      play,
      pause}}>
      {props.children}
            </PlayerCon.Provider>
  )
}

export default PlayerContext