import React, { createContext, useState } from 'react'

export interface PlayerContextType {
    player: any;
    setPlayer: React.Dispatch<React.SetStateAction<any>>;
}
export const PlayerCon = createContext<PlayerContextType | undefined>(undefined)
export const usePlayer = () => {
    const context = React.useContext(PlayerCon)
    return context
}
function PlayerContext(props: any) {
    const [player, setPlayer] = useState({})
  return (
    <PlayerCon.Provider value={{player, setPlayer}}>
      {props.children}
            </PlayerCon.Provider>
  )
}

export default PlayerContext