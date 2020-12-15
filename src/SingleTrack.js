import React, {useState} from 'react'
import TrackInfo from './TrackInfo'
import {useHistory, Link} from 'react-router-dom'
import Player from './AudioPlayer'
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

const SingleTrack = (props) => {
    const {track, token} = props
    const [display, setDisplay] = useState(false)
    const [target, setTarget] = useState(track.name)

    const displayInfo = () => {
        setDisplay(!display)
        setTarget(track.name)
        console.log(track.name)
        // setTarget(e.target
    }

    return (
        <div className='single-track'>
  <div className='details-left'>
                <div className='track-info img'><img src={track.images[2].url}/></div>
                <div className='track-info release'>{track.release_date}</div>
            </div>
            <div className='details-right'> 
                <a href={track.external_urls.spotify} className='link'><div className='track-info song'>{track.name}</div>
</a>
                <div className='track-info artist'><a href={track.artists[0].external_urls.spotify} className='link'>{track.artists[0].name}</a></div>
                {track.artists.slice(1).map((artist, i) => <div className='track-info artist' key={i}><a href={artist.external_urls.spotify} className='link'>{artist.name}</a>
                </div>)}
                {/* <Link to={{pathname:`tracks/${track.id}`, state : {
                    token
                } }}>Get Info</Link> */}

                {display && track.name === target? <div>
                    <button onClick={displayInfo}>Toggle Player</button><TrackInfo track={track} token={token} /></div>: <div>
                <div><button onClick={displayInfo}>Toggle Player</button></div>
                </div>}

    </div> 
            
        </div>
    )
}

export default SingleTrack;