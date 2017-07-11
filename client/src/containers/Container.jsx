import React from 'react'
import { SongsList } from '../components/SongsList.jsx'

class Container extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      topTwentySongs: []
    }
  }

  componentDidMount() {
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=21/json"
  const request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = () => {
    if(request.status !== 200) return
    const jsonString = request.responseText;
    const data = JSON.parse( jsonString );
  
    this.setState( { topTwentySongs: data.feed.entry } )
    
  }
  request.send();
  }

  render() {
    return (
      <div id="container">
        <SongsList topsongs={ this.state.topTwentySongs }></SongsList>
      </div>
    )
  }
}

export default Container