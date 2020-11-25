import React from 'react'

const SingleTrack = (props) => {
    const {track} = props
    return (
        <div>
            <div>{track.name}</div>
            <div>{track.id}</div>
            <div>{track.release_date}</div>
        </div>
    )
}

export default SingleTrack;