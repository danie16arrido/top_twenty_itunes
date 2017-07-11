import React from 'react'
import { SongItem } from './SongItem.jsx'

export const SongsList = ( props ) => {
  if( !props.topsongs) return null;

  const songsToRender = props.topsongs.map( ( song, index ) => {
    return <SongItem key={ index } song={ song } />
  })
    
  
  
  return(
    <div>
      { songsToRender }
    </div>
  )

}