import React, { Component } from 'react';
import '../css/App.css';
import Sample from './Sample.js';
// import md from '../Jack Introduction.html';

class App extends Component {
  render() {
    return (
      <div>
        <h1>个人简介</h1>

        <p>我是谭家杰，来自中国广东。毕业于华南农业大学信息管理与信息系统专业，现在在Trinity Western University读MBA。本人在国内从实习开始一直从事前端方面的工作，有2年的工作经验。本人对前端充满热情，闲余时间也会逛技术论坛或者看框架的源码学习作者的思路和做法，也会跟身边做前端的朋友交流。</p>

        <h2>工作经历</h2>

        <ul><li>广东德生科技股份有限公司--前端开发工程师：主要负责PC版医院管理系统的开发，以及Hybrid APP 页面的开发。在PC版系统中使用了JQuery，在Hybrid APP中使用了AngularJS + Ionic + Cordova。</li><li>广州优思得科技有限公司--前端开发工程师：主要负责PC版CRM系统的开发、微信公众号页面的开发、React Native APP的开发以及NodeJS中间件的开发。其中，在CRM系统和微信公众号页面中使用了VueJS + vuex。在第一版APP中使用了Vue + cordova，但是因为体验问题用了ReactNative重构。在NodeJS中使用了ExpressJS，作为中间件把Java后台的微服务进行转发。</li></ul>

        <h2>技术栈</h2>

        <ul><li>AngularJS</li><li>JQuery</li><li>VueJS</li><li>React Native</li><li>ExpressJS</li><li>Gulp</li><li>Webpack</li></ul>

        <h2>Github</h2>

        <p>https://github.com/JackTam1993</p>

        <p>made by markdown.</p>

      </div>
    );
  }
}



export default App;
