import React, {Component} from 'react';
import style from "../home/css/home.css";
import classname from "classnames";


class Navbar extends Component {
    render() {
        return (
                <div className={classname(style.nav,style.padd,"bg-light")}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">LQP</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">首页 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">学习</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        管理员入口
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">添加科目</a>
                                        <a className="dropdown-item" href="#">删除科目</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">修改科目</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">登录</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">注册</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
        )
    }
}

export default Navbar;
