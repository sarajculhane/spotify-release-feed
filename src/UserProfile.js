import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'

const UserProfile = (props) => {
    const {user} = props.history.location.state
    console.log(user)
    return (
        <div><Nav user={user}/>
<div class="card" style={{width: '18rem'}}>
  { user.images.length > 0 ? <img src={user.images[0]} class="card-img-top" /> : <div>No Profile Picture</div>}
  <div class="card-body">
    <h5 className="card-title">{user.display_name}</h5>
    <h5 className="card-title">{user.email}</h5>
    <Link to='/' className="btn btn-primary" style={{color: 'whitesmoke'}}>Back to Releases</Link>
  </div>
</div>
        </div>
    )
}

export default UserProfile;