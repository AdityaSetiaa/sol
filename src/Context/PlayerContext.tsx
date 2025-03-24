import React, { createContext, useRef, useState } from 'react'
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
}
export const PlayerCon = createContext<PlayerContextType | undefined>(undefined)
export const usePlayer = () => {
    const context = React.useContext(PlayerCon)
    return context
}
function PlayerContext(props: any) {
    const [player, setPlayer] = useState({})
    const audioRef = useRef({} as HTMLAudioElement)
    const  seekBar = useRef(null)
    const seekFill = useRef(null)
    const volumeBar = useRef(null)
    const [status, setStatus] = useState(true)
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
    
  return (
    <PlayerCon.Provider value={{ audioRef,
      seekBar,
      seekFill,
      volumeBar,
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