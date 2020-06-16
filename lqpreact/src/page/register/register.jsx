import React, {Component} from 'react';
import Navbar from "../components/navbar";
import style from "../login/login.css";
import Avatars from './../components/avatars '
import Uploads from './../components/uploads'
import  registerAction  from './../../store/action/register'
import { Spin } from 'antd';
import { connect } from 'react-redux'
import { message } from 'antd';
import restyle from './register.css';
import Cookies from 'react-cookies'


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            tx:'',
            spinning:false
        };
    }

    render() {
        return (
            <div>
                <Spin tip="Loading..." spinning={this.state.spinning} />

                <Navbar/>
                <div className={style.container}>
                    <form onSubmit={this.handelClick}>
                    <div style={{display:'flex', justifyContent: "space-between",alignItems:"center"}}>
                        <Avatars  tx={this.state.tx} />
                        <Uploads getTx = { this.getTx } />
                    </div>

                        <div className="text-center mb-4">

                        </div>

                        <div className="form-label-group">
                            <input type="username"  className="form-control" placeholder="用户名"
                                   required autoFocus
                                   value={this.state.username}
                                   onChange={e => {
                                       this.setState({
                                           username:e.target.value
                                       });
                                   }}
                            />
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="密码"
                                   required
                                   value={this.state.password}
                                   onChange={e => {
                                       this.setState({
                                           password:e.target.value
                                       });
                                   }}
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={ this.registeruser }>注册</button>
                    </form>
                </div>
            </div>
        )
    }

    getTx = (tx)=>{
        this.setState({
            tx,
        });
    };

    registeruser=()=>{
        let { username,password,tx } = this.state;
        if( username && password && tx ){
            this.setState({
                spinning:true
            });
            this.props.registerAction(this.state).then(res=>{
                res.json().then(res2=>{
                    if(res2.name === "repeat"){
                        message.warning({
                            content: '用户名已被使用',
                            duration:3,
                        });
                        setTimeout(()=>{
                            this.setState({
                                spinning:false
                            });
                        },1000);
                    }else{
                        Cookies.save("lqp336699_userId",{"username":username});
                        message.success({
                            content: '注册成功正在为您登陆',
                            duration:3,
                        });
                        setTimeout(()=>{
                            this.setState({
                                isLogin:true,
                            });
                            this.props.history.push('/')
                        },2000);
                    }
                })
            });
        }
        else if(tx=== '' && username && password){
            return message.warning({
                content: '请上传头像',
                duration:3,
            });
        }
    };

    handelClick = (e)=>{
        e.preventDefault();
    }
}

const mapStateToProps = (store)=>{
    return {
        reg:store.regestReducer
    }
};

export default connect(mapStateToProps,{ registerAction })(Register);
