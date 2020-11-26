import React, { Component} from "react";
import GetData from './GetData'
import Login from './Login'


class App extends Component{
  render(){
    return(
      <div className="app">
        <h1> Most recent tracks by Artists you follow</h1>
        {/* <GetData /> */}
        <Login />
      </div>
    );
  }
}

export default App;