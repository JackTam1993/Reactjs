import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App.js'
import MainLayout from './MainLayout';
import MainPage from './MainPage';
import Zhihu from './Zhihu';

class APPRouter extends Component{

    render() {
        return (
            <Router>
                <LocaleProvider locale={enUS}>
                    <MainLayout>
                        <Route exact path="/" component={App}/>
                        <Route path="/app1" component={MainPage}/>
                        <Route path="/zhihu" component={Zhihu}/>
                    </MainLayout>
                </LocaleProvider>
            </Router>
            )

    }
}

export default APPRouter