import React from 'react'

const Nav = (props) => {
    const {user} = props
    return (
    <div className='main-nav'>
        <div className='text'>
      <div className='left-text'><p>newReleases <i className="fa fa-volume-up" aria-hidden="true"></i>
</p></div>

{user ? <div className='right-text'><p><i class="fa fa-user-circle-o" aria-hidden="true"></i>
{user.display_name} </p></div> : <div className='right-text'><p><a href="/login" className="button-nav"> <i class="fa fa-user-circle-o" aria-hidden="true"></i>
 Login</a></p></div>}

        </div>
    </div>
    )
}

export default Nav;