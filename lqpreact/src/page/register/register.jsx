import React, {Component} from 'react';
import Navbar from "../components/navbar";
import style from "../login/login.css";
import Avatars from './../components/avatars '
import Uploads from './../components/uploads'


class Register extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className={style.container}>

                    <div style={{display:'flex', justifyContent: "space-between",alignItems:"center"}}>
                        <Avatars />
                        <Uploads />
                    </div>



                    <form className="form-signin">
                        <div className="text-center mb-4">
                            <img className="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72"
                                 height="72" />
                        </div>

                        <div className="form-label-group">
                            <input type="username" id="用户名" className="form-control" placeholder="用户名"
                                   required autoFocus />
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="密码"
                                   required />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">注册</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
