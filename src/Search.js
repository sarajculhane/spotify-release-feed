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
            
            console.log(searchTerm ==='', e.target.search.value, searchTerm, submitted) 
        if(allTracks.map((track) => track.name.toLowerCase()).filter((name) => name.includes(e.target.search.value.toLowerCase()))) {
            setTracks(allTracks.filter((track) => track.name.toLowerCase().includes(e.target.search.value.toLowerCase())))
            setSubmitted(true)
            console.log('success')
            
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
            submitted ? newTracks.map((track, i) => <SingleTrack passing='hi' key={i} track={track} token={token} term={searchTerm} submitted={submitted}/>)
                    :
                      allTracks.map((track, i) => <SingleTrack passing='hi' key={i} track={track} token={token} term={null}  submitted={submitted}/>)}
        </div>
    )
}

export default Search;