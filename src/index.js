import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import '@babel/polyfill'
import {BrowserRouter as Router}  from 'react-router-dom'
import {createBrowserHistory, createMemoryHistory} from 'history'

const history = createBrowserHistory({forceRefresh:true})

ReactDOM.render(
<Router history={history}>
    <App />
</Router>, document.getElementById("root"));