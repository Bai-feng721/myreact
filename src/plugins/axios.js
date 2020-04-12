import React from "react";
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom";
import {baseUrl} from "../server";
import qs from 'qs';
import pubsub from 'pubsub-js'
axios.interceptors.request.use((config)=>{
  let user = window.localStorage.getItem('user');
  user = user ? qs.parse(user): '';
  config.headers={'token':user.token};
  return config;
},function(error){
  return Promise.reject(error);
  });
axios.interceptors.response.use(function(response){
  pubsub.publish('UPDATE_LOADING',false)
  let router = new Router();
  if (response.data.err===2&&!router.history.location.pathname.includes('/login')){
    window.location.href = window.location.origin+'/login?path='+router.history.location.pathname

}
  return response;
},function (error) {
  return Promise.reject(error);
});
React.axios = axios;
React.Component.prototype.axios = axios;
window.axios=axios;
export default axios;
