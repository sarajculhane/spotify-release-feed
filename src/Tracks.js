import React, {useState, useEffect} from 'react'
import SingleTrack from './SingleTrack'

const Tracks = (props) => {
    const {tracks} = props
    const allTracks = []

    tracks.forEach((track) => allTracks.push(...track))
    console.log(allTracks[0].release_date)
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)
    console.log(allTracks[0].release_date)


    
    return (
        <div>
            {allTracks.map((track, i) => <SingleTrack key={i} track={track}/>)}
        </div>
    )
}

export default Tracks;