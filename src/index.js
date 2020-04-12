import React  from 'react';
import ReactDom from 'react-dom';
import "./utils/font";
import "./assets/css/index.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Default from "./layouts/default";
import './plugins/axios'

import {serverBaseUrl} from './server';
React.baseUrl = serverBaseUrl;
React.Component.prototype.baseUrl = serverBaseUrl;


ReactDom.render(
    <Router>
        <Route component={Default}/>
    </Router>
  ,
  document.querySelector('#root'),
  ()=>console.log('react-dom render')
);

