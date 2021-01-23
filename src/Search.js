import React, {useState, useEffect} from 'react'
import SingleTrack from './SingleTrack'


const Search = (props) => {
    let {tracks, token} = props
    let allTracks = []
    tracks.forEach((track) => allTracks.push(...track))
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)
    
    // Show either the 200 latest tracks or theose from Jan 2020 onward

    allTracks = allTracks.length < 200 ? allTracks.filter((track) =>  new Date(track.release_date).getFullYear() === 2020 || new Date(track.release_date).getFullYear() === 2021) :
    allTracks.slice(0,200)
    const [newTracks, setTracks] = useState([])
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        let searched = e.target.search.value.toLowerCase()
        let artistNames = allTracks.map((track) => track.artists.map((artist) => artist.name.toLowerCase()).filter(name => name.includes(searched))).map((val, i) =>  {
            if(val.length) return i
        }).filter((val) => typeof val === 'number')
        let songTitles = allTracks.map((track) => track.name.toLowerCase()).map((name , i) => {
            if(name.includes(searched)) return i
        }).filter((val) => typeof val === 'number')

        if (allTracks.filter((val, i) => artistNames.concat(songTitles).includes(i))) {

                setSubmitted(true)
                setTracks(allTracks.filter((val, i) => artistNames.concat(songTitles).includes(i)))
            }
           else {
                console.log('not a valid term')
                setSubmitted(false)
        }

    }

    



    
    return (
        <div>
              <form className='search-form' onSubmit={handleSubmit}>
 
            <input type='text' className='search' name='search' />
            <button className='button-main' type='submit'>Search</button>
            </form>
            {
            submitted ? newTracks.map((track, i) => <SingleTrack key={i} track={track} token={token} submitted={submitted}/>)
                    :
                      allTracks.map((track, i) => <SingleTrack key={i} track={track} token={token} submitted={submitted}/>)}
        </div>
    )
}

export default Search;