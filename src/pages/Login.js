import React,{Component}from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav";
import {UcButton} from "../components/uc-button";
import {UcInput} from "../components/uc-input";

import {Link} from 'react-router-dom'
import qs from 'qs';
export default  class Login extends Component{
    state={
        username:'',
        password:'',
        errorMess:''
    };
    login=async ()=>{
        let params = new URLSearchParams();
        params.append('username',this.state.username);
        params.append('password',this.state.password);
        let res = await this.axios({url:'/api/login',methods:'post',data:params});
        if (res.data.err===0){
            window.localStorage.setItem("user",qs.stringify(res.data));
            this.props.history.push({
                pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
            })
        }else{
            this.setState({errorMess:res.data.msg})
        }
    };

    changeIpt=(ev)=>{
        this.setState({[ev.target.name]:ev.target.value})
    };
    render() {
        let {username,password,errorMess}=this.state;
        return(
            <div className="content">
                <UcNav arrow='gray' borderWidth={0} bgColor="transparent"></UcNav>
                <h1></h1>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <Link to="/login">登录</Link>
                        <span></span>
                        <Link to="/reg">注册</Link>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <UcInput label="用户"
                        model={{name:'username',value:username,
                        onChange:this.changeIpt}}/>
                    <UcInput label="密码"
                         type="password"
                         model={{name:'password',value:password, onChange:this.changeIpt}}/>
                    {errorMess}
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.Login}>登录</UcButton>
                    <a className="tishi">忘记密码？</a>
                </div>
            </div>
        )

    }
}
