import React from 'react'

export const SongItem = ( props ) => {
  console.log(props.song["im:collection"].link.attributes.href)
  return(
    <li>
      <img src={ props.song["im:image"][2].label} alt={ props.song["im:name"].label }/>
      { props.song["im:name"].label }
      { props.song["im:artist"].label}
      <a href={ props.song["im:collection"].link.attributes.href }>Buy now</a>
      
    </li>
  )

}