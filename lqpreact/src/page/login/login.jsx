import React from 'react';
import homeStyle from './../home/css/home.css'
import Navbar from './../components/navbar'
import style from './login.css'

class Login extends React.Component{


    render(){
        return(
            <div>
                <Navbar/>
                <div className={style.container}>

                    <form className="form-signin">
                        <div className="form-label-group">
                            <input type="username" id="用户名" className="form-control" placeholder="用户名"
                                   required autoFocus />
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="密码"
                                   required />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }


}


export default Login;
