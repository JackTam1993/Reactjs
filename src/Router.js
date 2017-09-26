import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';
import App from './App.js'

class APPRouter extends Component{

    render() {
        return (
            <Router>
                <Route path="/" component={App}/>
            </Router>
            )

    }
}

export default APPRouter