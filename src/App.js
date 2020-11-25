import React, { Component} from "react";
import GetData from './GetData'


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Most recent tracks by Artists you follow</h1>
        <GetData />
      </div>
    );
  }
}

export default App;