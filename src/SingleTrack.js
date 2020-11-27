import React from 'react'

const SingleTrack = (props) => {
    const {track} = props
    console.log(track)
    return (
        <div className='single-track'>
            <div className='details-left'>
                <div className='track-info img'><img src={track.images[2].url}/></div>
                <div className='track-info release'>{track.release_date}</div>
            </div>
            <div className='details-right'> 
                <a href={track.external_urls.spotify} className='link'><div className='track-info song'>{track.name}</div></a>
                <div className='track-info artist'><a href={track.artists[0].external_urls.spotify} className='link'>{track.artists[0].name}</a></div>
                {track.artists.slice(1).map((artist) => <div className='track-info artist'><a href={artist.external_urls.spotify} className='link'>{artist.name}</a></div>)}
            </div>
            
        </div>
    )
}

export default SingleTrack;