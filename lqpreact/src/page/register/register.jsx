import React, {Component} from 'react';
import Navbar from "../components/navbar";
import style from "../login/login.css";
import Avatars from './../components/avatars '
import Uploads from './../components/uploads'


class Register extends Component {
    state = {
        username:'',
        password:'',
        tx:''
    };
    render() {

        return (
            <div>
                <Navbar/>
                <div className={style.container}>

                    <div style={{display:'flex', justifyContent: "space-between",alignItems:"center"}}>
                        <Avatars tx={this.state.tx} />
                        <Uploads />
                    </div>



                    <form className="form-signin">
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
                        <button className="btn btn-lg btn-primary btn-block" type="submit">注册</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
