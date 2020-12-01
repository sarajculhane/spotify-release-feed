import React, { Component} from "react";
import Nav from './Nav'
import Login from './Login'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from "./Routes";


class App extends Component{
  render(){
    return(
        <div>
            
        
      <div className="app">
    <Router>
        <Routes />
        </Router>
      </div>
      </div>
    );
  }
}

export default App;