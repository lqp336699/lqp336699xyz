import React from 'react';
import style from './login.css'
import { connect } from 'react-redux'
import Cookie from "react-cookies";
import { loginAction } from './../../store/action/login'
import {message, Spin} from "antd";

class Login extends React.Component{
    state={
        username:'',
        password:'',
        spinning:false
    };
    render(){
        return(
                <div className={style.container}>
                    <Spin tip="Loading..." spinning={this.state.spinning} />

                    <form className="form-signin" onSubmit={e=>{
                        e.preventDefault();
                    }}>
                        <div className="form-label-group">
                            <input type="username"
                                   id="用户名"
                                   className="form-control"
                                   placeholder="用户名"
                                   required autoFocus
                                   value={this.state.username}
                                   onChange={(e)=>{
                                       this.setState({
                                           username:e.target.value
                                       })
                                   }}
                            />
                        </div>

                        <div className="form-label-group">
                            <input type="password"
                                   id="inputPassword"
                                   className="form-control"
                                   placeholder="密码"
                                   required
                                   value={this.state.password}
                                   onChange={(e)=>{
                                       this.setState({
                                           password:e.target.value
                                       })
                                   }}
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>登录</button>
                    </form>
                </div>
        )
    }

    login = ()=>{
        let { username,password } = this.state;
        this.props.loginAction({ username,password }).then(res=>{
            res.json().then(res2=>{
                if(res2.token){
                    this.setState({
                        spinning:true
                    });
                    Cookie.save("lqp336699_userId",{"token":res2.token});
                    setTimeout(()=>{
                        message.success({
                            content: '登陆成功跳转首页',
                            duration:3,
                        });
                        this.setState({
                            spinning:false
                        });
                        this.props.history.push("/")
                    },2000)
                }else{
                    this.setState({
                        spinning:true
                    });
                    setTimeout(()=>{
                        message.error({
                            content: '密码错误',
                            duration:3,
                        });
                        this.setState({
                            spinning:false
                        });
                    },2000)
                }
            })
        })
    }
    componentDidMount() {

    }
}

const mapStateToProps = (store)=>{

};


export default connect(mapStateToProps,{ loginAction })(Login) ;
