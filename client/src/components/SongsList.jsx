import React from 'react'
import { SongItem } from './SongItem.jsx'

export const SongsList = ( props ) => {
  console.log("list", props)
  // const songsToRender = props.songs.map( ( song, index ) => {
  //   return <SongItem key={ index } name={ song.name } />
  // })

  return(
    <div>
      <SongItem></SongItem>
    </div>
  )

}