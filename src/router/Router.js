import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from '../js/App.js'
import MainLayout from '../js/MainLayout';
import MainPage from '../js/MainPage';
import Zhihu from '../js/Zhihu';
import ZhihuNewsDetail from '../js/ZhihuNewsDetail';

class APPRouter extends Component{

    render() {
        return (
            <Router>
                <LocaleProvider locale={enUS}>
                    <MainLayout>
                        <Route exact path="/" component={App}/>
                        <Route path="/app1" component={MainPage}/>
                        <Route path="/zhihu" component={Zhihu}/>
                        <Route path="/zhihuDaily/:id" component={ZhihuNewsDetail}/>
                    </MainLayout>
                </LocaleProvider>
            </Router>
            )

    }
}

export default APPRouter