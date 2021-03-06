import React, {Component} from 'react';
import classname from 'classnames'
import homeStudy from './../home/css/home.css'
import style from './studyDetail.css'
import { Empty } from 'antd';
import styleaa from './../home/css/home.css'
import { Link } from 'react-router-dom'
import Beian from './../components/beian'
import Pinlun from './../components/pinlun'
import Cookie from 'react-cookies'
import { BackTop } from 'antd';
import { connect } from 'react-redux'
import { getStudyDetail } from './../../store/action/getStudyDetail'
import { tokenAction } from './../../store/action/token'

class StudyDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            studyDetail:[]
        };
    }
    render() {
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
        const studyDetailBox =(
            this.state.studyDetail.map(item =>{
                if(item.title){
                    return(
                        <Link to={`/study/${this.state.id}/studyItem/${item.title}`}>
                            <a href="#" style={{margin:"0 0 1.5rem 0" }} className="list-group-item list-group-item-action list-group-item-dark" key={item._id}>{item.title}</a>
                        </Link>
                    )
                }})
    );

        const nonestudyDetail = (
                    <Empty style={{margin:"8rem 0 0 0"}} description='我很忙，没空写' />
        );


        return (
            <div className={homeStudy.body}>
                <div className={classname(homeStudy.container,style.study_list)}>
                    <div className={classname("list-group",style.list)}>
                        {
                            this.state.studyDetail.length === 0 ? nonestudyDetail : studyDetailBox
                        }
                    </div>
                    <Pinlun lesson={this.props.match.params.id} />
                    <Beian />
                    <BackTop className={styleaa.upBox}>
                        <div style={upStyle}>UP</div>
                    </BackTop>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if(Cookie.load("lqp336699_userId")){
            this.props.tokenAction();
        }

        const { id } = this.state;
        this.props.getStudyDetail(id).then(res=>{
            res.json().then(res2=>{
                this.setState({
                    studyDetail:res2
                })
            })
        })
    }
}

const mapStateToProps =(store)=>{
    return{
        studyDetail:store.StudyDetailReducer.studyDetail
    }
};

export default connect(mapStateToProps,{ getStudyDetail,tokenAction })(StudyDetail);
