import React, {useState} from 'react'
import SingleTrack from './SingleTrack'
import Tracks from './Tracks'
import FetchAll from './FetchAll'

const Search = () => {

    const [searchTerm, setTerm] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTerm(e.target.search.value)

        e.target.search.value = ''
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
 
            <div className='filter-menu'>
            <select > 
                <option value='default'>
                    Filter By
                </option>

                <option value='artist'>
                    Artist
                </option>

                <option value='track'>
                    Track
                </option>
                </select>
            </div>
            <input type='text' className='search' name='search' />
            <button className='button-main' type='submit'>Search</button>
            {/* {submitted ?  <FetchAll filter={searchTerm} /> : <div></div>} */}
            </form>

    )
}

export default Search;