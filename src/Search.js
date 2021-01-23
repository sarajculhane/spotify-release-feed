import React, {useState, useEffect} from 'react'
import SingleTrack from './SingleTrack'


const Search = (props) => {
    let {tracks, token} = props
    let allTracks = []
    tracks.forEach((track) => allTracks.push(...track))
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)
    allTracks = allTracks.filter((track) =>  new Date(track.release_date).getFullYear() === 2020 || new Date(track.release_date).getFullYear() === 2021)
    const [searchTerm, setTerm] = useState('')
    const [newTracks, setTracks] = useState([])
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
       
        if(e.target.search.value !== '') {
            setTerm(e.target.search.value)
            
            console.log(searchTerm ==='', e.target.search.value, searchTerm, submitted) 
        
        // console.log(tracks.map((track) => track.name), console.log(tracks.map((track) => track.name)).includes('hi'))
        // console.log(searchTerm, allTracks.map((track) => track.name),allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm)))
        if(allTracks.map((track) => track.name.toLowerCase()).filter((name) => name.includes(searchTerm.toLowerCase())) && searchTerm === e.target.search.value) {
            setTracks(allTracks.filter((track) => track.name.toLowerCase().includes(searchTerm.toLowerCase())))
            setSubmitted(true)
            console.log('success')
            
            } 
        }   else {
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