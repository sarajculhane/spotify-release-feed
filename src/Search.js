import React, {useState} from 'react'
import SingleTrack from './SingleTrack'
import Tracks from './Tracks'

const Search = (props) => {

    const {tracks} = props
    const allTracks = []


    
    tracks.forEach((track) => allTracks.push(...track))
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)

    console.log(allTracks, 'props')
    const [searchTerm, setTerm] = useState('')
    const [newTracks, setTracks] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setTerm(e.target.search.value)
        // console.log(tracks.map((track) => track.name), console.log(tracks.map((track) => track.name)).includes('hi'))
        // console.log(searchTerm, allTracks.map((track) => track.name),allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm)))
        if(allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm))) {
            console.log(searchTerm, 'in the search')
            setTracks(allTracks.filter((track) => track.name.includes(searchTerm)))
            
        }
        e.target.search.value = ''
        setSubmitted(!submitted)
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
 
            <input type='text' className='search' name='search' />
            <button className='button-main' type='submit'>Search</button>
            {submitted ? newTracks.map((track) => {

                
             <SingleTrack searchTrack={track} /> 
            })
             
            : <div></div>}
            </form>

    )
}

export default Search;