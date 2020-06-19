import React, {Component} from 'react';
import homeStyle from './../home/css/home.css'
import { connect } from 'react-redux'
import { tokenAction } from './../../store/action/token'


class StudyItem extends Component {
    render() {
        return (
            <div className={homeStyle.container} style={{height:"20rem", display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    有空写
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.tokenAction()
    }
}

export default connect(null,{ tokenAction })(StudyItem) ;
