import React,{Component} from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav";
import {UcButton} from "../components/uc-button";
import {UcInput} from "../components/uc-input";
import {Link} from 'react-router-dom';
export default  class Reg extends Component{
   show=()=>{
     console.log('show')
   };
   state={
     username:'alex'
   };
   changeUserName=(ev)=>{
     this.setState({
       [ev.target.name]:ev.target.value
     })
   };
    render() {
        let {username} =this.state;
        return(
            <div className="content">
               <UcNav arrow="gary" borderWidth={0}
               bgColor="transparent"/>
               <h1></h1>
              <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                  <Link to="/login">登录</Link>
                  <span></span>
                  <Link to="/login">注册</Link>
                </div>
                <p className="rsolid"></p>
              </div>
              <ul>
                <UcInput label='用户'></UcInput>
                <UcInput label='密码' type='password'></UcInput>
              </ul>
              <div className="footbox">
                <UcButton style={{marginTop:'0.64rem'}}>注册</UcButton>
                <a className="tishi">忘记密码？</a>
              </div>
            </div>
        )

    }
}
