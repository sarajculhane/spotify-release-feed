import React, {useState, useEffect} from 'react'
import SingleTrack from './SingleTrack'
import Search from './Search'


const Tracks = (props) => {
    let {tracks, token} = props
    const allTracks = []


    
    tracks.forEach((track) => allTracks.push(...track))
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)



    
    return (
        <div>
            <Search tracks={tracks} />
            {allTracks.map((track, i) => <SingleTrack key={i} track={track} token={token}/>)}
        </div>
    )
}

export default Tracks;