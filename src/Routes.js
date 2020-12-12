import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import TrackInfo from './TrackInfo'

const Routes = () => {
    return (<div>
        <Switch>
        <Route exact path='/' component={Login} />
        {/* <Route exact path='/tracks' component={Tracks} /> */}
        <Route exact path='tracks/:id' component={TrackInfo} />
        </Switch>
    </div>)
}

export default Routes;