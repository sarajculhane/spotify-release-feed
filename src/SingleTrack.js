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
                <div className='track-info song'>{track.name}</div>
                <div className='track-info artist'>{track.artists[0].name}</div>
                {track.artists.slice(1).map((artist) => <div className='track-info artist'>{artist.name}</div>)}
            </div>
            
        </div>
    )
}

export default SingleTrack;