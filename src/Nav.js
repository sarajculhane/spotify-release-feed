import React from 'react'
import Search from './Search'
const Nav = (props) => {
    const {user} = props
    return (
    // <div className= 'full-nav'>
    <div className='main-nav'>
        <div className='text'>
      <div className='left-text'><p>newReleases <i className="fa fa-volume-up" aria-hidden="true"></i>
</p></div>

{user ? <div><div className='right-text'><p><i className="fa fa-user-circle-o" aria-hidden="true"></i>
{user.display_name} </p></div></div>: <div className='right-text'><p><a href="/login" className="button-nav"> <i className="fa fa-user-circle-o" aria-hidden="true"></i>
 Login</a></p></div>}

        </div>

        
    </div>
    /* <div className='search-container'>
        <Search />
        </div>
    </div> */

        
    )
}

export default Nav;