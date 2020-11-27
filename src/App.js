import React, { Component} from "react";
import Nav from './Nav'
import Login from './Login'


class App extends Component{
  render(){
    return(
        <div>
            <Nav />
        
      <div className="app">
        
        <Login />
      </div>
      </div>
    );
  }
}

export default App;