import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import '@babel/polyfill'
import {Router} from 'react-router-dom'
import {createBrowserHistory, createMemoryHistory} from 'history'

const history = createBrowserHistory({forceRefresh:true})
console.log(history)

ReactDOM.render(
<Router history={history}>
    <App />
</Router>, document.getElementById("root"));