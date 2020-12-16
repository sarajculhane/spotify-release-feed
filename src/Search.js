import React, {useState} from 'react'
import SingleTrack from './SingleTrack'
import Tracks from './Tracks'

// const Search = (props) => {

//     const {tracks, token} = props
//     const allTracks = []
//     tracks.forEach((track) => allTracks.push(...track))


//     allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)
//     const [searchTerm, setTerm] = useState('')
//     const [newTracks, setTracks] = useState([])
//     const [submitted, setSubmitted] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault()
        
//         setTerm(e.target.search.value)
//         // console.log(tracks.map((track) => track.name), console.log(tracks.map((track) => track.name)).includes('hi'))
//         // console.log(searchTerm, allTracks.map((track) => track.name),allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm)))
//         if(allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm))) {
//             setTracks(allTracks.filter((track) => track.name.includes(searchTerm)))
            
//         }
//         setSubmitted(!submitted)
//         e.target.search.value = ''
        
//     }

//     return (
//     <div>
        // {/* <form className='search-form' onSubmit={handleSubmit}>
 
        //     <input type='text' className='search' name='search' />
        //     <button className='button-main' type='submit'>Search</button>
        //     </form> */}
        //     {/* <div>
        //     {submitted ? newTracks.map((track) => {

                
        //      <SingleTrack track={track} token={token}/> 
        //     })
        //       */}
//             <div>{allTracks.map((track) => {

                
//                 <SingleTrack track={track} token={token}/> 
//                })}</div>
//                {/* </div> */}
//                </div>

//     )
// }

const Search = (props) => {
    let {tracks, token} = props
    const allTracks = []


    
    tracks.forEach((track) => allTracks.push(...track))
    allTracks.sort((a, b) => b.release_date > a.release_date ? 1 : -1)
    const [searchTerm, setTerm] = useState('')
    const [newTracks, setTracks] = useState([])
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(typeof e.target.search.value)
        setTerm(e.target.search.value)
        console.log(searchTerm)
        // console.log(tracks.map((track) => track.name), console.log(tracks.map((track) => track.name)).includes('hi'))
        // console.log(searchTerm, allTracks.map((track) => track.name),allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm)))
        if(allTracks.map((track) => track.name).filter((name) => name.includes(searchTerm))) {
            setTracks(allTracks.filter((track) => track.name.includes(searchTerm)))
            
        }
        setSubmitted(!submitted)
        // e.target.search.value = ''
        // console.log(searchTerm)
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