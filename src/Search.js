import React from 'react'

const Search = () => {
    return (
        <div className='search-form'>
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
            <input type='text' className='search' />
            <div className='button-main'>Search</div>
        </div>
    )
}

export default Search;