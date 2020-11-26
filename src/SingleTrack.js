import React from 'react'

const SingleTrack = (props) => {
    const {track} = props
    console.log(track)
    return (
        <div className='single-track'>
            <div className='track-info'>{track.name}</div>
            <div className='track-info'>{track.artists[0].name}</div>
            <div className='track-info'>{track.release_date}</div>
        </div>
    )
}

export default SingleTrack;