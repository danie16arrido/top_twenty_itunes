import React from 'react'

export const SongItem = ( props ) => {
  console.log(props.song["im:collection"].link.attributes.href)
  return(
    <li>
      <div id="song-box">
        <div id="position">{ props.index + 1 }</div>
        <img src={ props.song["im:image"][2].label} alt={ props.song["im:name"].label }/> 
        

        <div id="song-name">{ props.song["im:name"].label }</div>
        <div id="song-artist">{ props.song["im:artist"].label}</div>
        <div id="buy-now"><a href={ props.song["im:collection"].link.attributes.href }>Buy now</a></div>
        
      </div>
      
    </li>
  )

}