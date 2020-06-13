import React, {Component} from 'react';
import classname from 'classnames'
import style from './css/home.css'
import { connect } from 'react-redux'
import getStudyList from './../../store/action/study'
// function getBase64(file) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = error => reject(error);
//     });
// }

class Home extends Component {
    state={
        studyList : []
    };

    render() {
        const { studyList } = this.state;

        return (
            <div className={style.body}>
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
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className={classname(style.container,style.lqpbg)}>
                    <div className={classname(style.lqp)}>
                        李清平的人个网站
                    </div>
                </div>

                <div className={ classname(style.container,style.bg,"list") }>
                  {  studyList.map((item)=>{
                      let item2 = JSON.parse(item.POST);
                      return(
                        <div className={style.list_box}>
                            <div className="card" style={{width: "12rem"}}>
                                <img src={ item2.thumbUrl } className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className={ classname(style.card_title,"card-title") }>{ item2.value }</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getStudyList().then(studyList=>{
            studyList.json().then(
                res2=>{
                    res2.forEach(item=>{
                        console.log(JSON.parse(item.POST).thumbUrl);
                    })
                    this.setState({
                        studyList:res2
                    })
                }
            )
        });
    }
}

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        studyList: state.getStudyList
    }
};

export default connect(mapStateToProps,{ getStudyList })(Home);
