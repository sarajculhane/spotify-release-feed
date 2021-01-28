import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import TrackInfo from './TrackInfo'
import UserProfile from './UserProfile'

const Routes = () => {
    return (<div>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/tracks/:id' component={TrackInfo} />
            <Route path='/profile' component={UserProfile} />
        </Switch>
    </div>)
}

export default Routes;