import React, {Component} from 'react';
import classname from "classnames";
import style from "../home/css/home.css";


class Lqp extends Component {
    render() {
        return (
            <div className={classname(style.container,style.lqpbg)}>
                <div className={classname(style.lqp)}>
                    李清平的人个网站
                </div>
            </div>
        )
    }
}

export default Lqp;
