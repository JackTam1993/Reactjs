import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';
import App from './App.js'
import MainLayout from './MainLayout';
import MainPage from './MainPage';

class APPRouter extends Component{

    render() {
        return (
            <Router>
                <div>
                    <MainLayout>
                        <Route exact path="/" component={App}/>
                        <Route path="/app1" component={MainPage}/>
                    </MainLayout>
                </div>
            </Router>
            )

    }
}

export default APPRouter