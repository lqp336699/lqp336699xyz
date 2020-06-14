import React, {Component} from 'react';
import style from "../home/css/home.css";
import classname from "classnames";
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



class Navbar extends Component {

    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };



    render() {



        const spuerUser = (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
            return (
                <div className={classname(style.nav, style.padd, "bg-light")}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to='/'>
                            <a className="navbar-brand" href="#">LQP</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <Link to='/'>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">首页 <span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                </Link>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">学习</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        管理员入口
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#" onClick={this.showModal}>添加科目</a>
                                        <a className="dropdown-item" href="#" onClick={this.showModal}>删除科目</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" href="#" onClick={this.showModal}>修改科目</a>
                                    </div>
                                </li>
                                <Link to='/login'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">登录</a>
                                    </li>
                                </Link>
                                <Link to='/register'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">注册</a>
                                    </li>
                                </Link>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div>
                        <Modal
                            title="登录管理员账号"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            { spuerUser }
                        </Modal>
                    </div>
                </div>
            )
        }
};



export default Navbar;
