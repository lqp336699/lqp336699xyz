import React, {Component} from 'react';
import homeStyle from './../home/css/home.css'


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
}

export default StudyItem;
