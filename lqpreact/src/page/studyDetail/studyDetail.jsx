import React, {Component} from 'react';
import classname from 'classnames'
import homeStudy from './../home/css/home.css'
import style from './studyDetail.css'
import Navbar from './../components/navbar'
import Lqp from "../components/lqp";
import Beian from './../components/beian'
import { connect } from 'react-redux'
import getStudyDetail from './../../store/action/getStudyDetail'

class StudyDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            studyDetail:[]
        };
    }
    render() {
        const { studyDetail } = this.props;

        return (
            <div className={homeStudy.body}>
                <Navbar />
                <div className={classname(homeStudy.container,style.study_list)}>
                    <Lqp/>
                    <div className={classname("list-group",style.list)}>
                        { studyDetail.map(item=>{
                            return(
                                <a href="#" className="list-group-item list-group-item-action list-group-item-dark" key={item._id}>{item.title}</a>
                            )
                        }) }

                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <Beian />
                </div>
            </div>
        )
    }
    componentDidMount() {
        const { id } = this.state;
        this.props.getStudyDetail(id)
    }
}

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        studyDetail:state.StudyDetailReducer
    }
};

export default connect(mapStateToProps,{ getStudyDetail })(StudyDetail);
