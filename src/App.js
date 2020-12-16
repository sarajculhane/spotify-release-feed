import React, { Component} from "react";
import Nav from './Nav'
import Login from './Login'
import Routes from "./Routes";


class App extends Component{
  render(){
    return(
        <div>
            
        
      <div className='app'>
        <Routes />
      </div>
      </div>
    );
  }
}

export default App;