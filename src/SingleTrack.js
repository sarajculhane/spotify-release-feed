import React from 'react'
import TrackInfo from './TrackInfo'
import {useHistory, Link} from 'react-router-dom'

const SingleTrack = (props) => {
    const {track} = props

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
                <Link to={`tracks/${track.id}`}>Get Info</Link>
    </div> 
            
        </div>
    )
}

export default SingleTrack;