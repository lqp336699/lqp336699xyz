import React, {Component} from 'react';
import classname from 'classnames'
import style from './css/home.css'
import { connect } from 'react-redux'
import getStudyList from './../../store/action/study'
import { BackTop } from 'antd';
import Lqp from "../components/lqp";
import Beian from './../components/beian'
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom'



class Home extends Component {
    state={
        studyList : []
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
                      let item2 = JSON.parse(item.POST);
                      return(
                          <Link to={ `/study/${ item2.value }` } >
                              <div className={style.list_box}>
                                  <div className="card" style={{width: "12rem"}}>
                                      <img src={ item2.thumbUrl } className="card-img-top" alt="..." />
                                      <div className="card-body">
                                          <h4 className={ classname(style.card_title,"card-title") }>{ item2.value }</h4>
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
        this.props.getStudyList().then(studyList=>{
            studyList.json().then(
                res2=>{
                    this.setState({
                        studyList:res2
                    })
                }
            )
        });
    }
}

const mapStateToProps =(state)=>{
    return{
        studyList: state.getStudyList,
    }
};

export default connect(mapStateToProps,{ getStudyList })(Home);
