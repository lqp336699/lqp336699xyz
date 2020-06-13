import React, {Component} from 'react';
import style from './beian.css'
import homeStyle from './../home/css/home.css'
import classnames from 'classnames'


class Beian extends Component {
    render() {
        return (
            <div className={classnames(style.beian,homeStyle.container)}>
                <p>© 2020-现在 lqp336699.xyz 版权所有</p>
                <p>备案号 ： 赣ICP备19004415号 </p>
            </div>
        )
    }
}

export default Beian;
