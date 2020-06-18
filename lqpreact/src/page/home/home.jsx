import React, {Component} from 'react';
import classname from 'classnames'
import style from './css/home.css'
import { connect } from 'react-redux'
import { BackTop } from 'antd';
import Beian from './../components/beian'
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom'



class Home extends Component {

    state ={
        studyList:[
            { img:'./img/1.png',value:'react' },
            { img:'./img/2.png',value:'HTML' },
            { img:'./img/12.png',value:'JS' },
            { img:'./img/3.png',value:'CSS' },
            { img:'./img/4.png',value:'VUE' },
            { img:'./img/13.png',value:'nginx' },
            { img:'./img/5.png',value:'ES6' },
            { img:'./img/8.png',value:'微信小程序' },
            { img:'./img/7.png',value:'UI库' },
            { img:'./img/10.png',value:'LINUX' },
            { img:'./img/9.png',value:'HTTP' },
            { img:'./img/6.png',value:'移动端' },
            { img:'./img/11.png',value:'BUG合集' }
        ]
    };
    render() {
        const { studyList } = this.state;
        const upStyle = {
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,

        };
        return (
            <div className={style.body}>
                <div className={ classname(style.container,style.bg,"list") }>
                  {
                      studyList.length === 0  ? <div><Skeleton/><Skeleton/></div>  :
                      studyList.map((item)=>{
                      return(
                          <Link to={ `/study/${ item.value }` } >
                              <div className={style.list_box}>
                                  <div className="card" style={{width: "12rem",overflow:"hidden"}}>
                                      <div style={{width: "12rem", overflow:"hidden"}}>
                                          <img  src={ item.img } className="card-img-top" alt="..." />
                                      </div>
                                      <div className="card-body">
                                          <h4 className={ classname(style.card_title,"card-title") }>{ item.value }</h4>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                    )
                })}
                </div>
                <Beian />
                <BackTop className={style.upBox}>
                    <div style={upStyle}>UP</div>
                </BackTop>
            </div>
        )
    }
    componentDidMount() {

    }
}



export default connect()(Home);
