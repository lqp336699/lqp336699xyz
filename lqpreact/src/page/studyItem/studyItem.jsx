import React, {Component} from 'react';
import { connect } from 'react-redux'
import { tokenAction } from './../../store/action/token'
import homeStyle from './../home/css/home.css'
import style from './studyItem.css'
import classname from 'classnames'
import Cookie from "react-cookies";
import Beian from './../components/beian'
import { convertFromRaw,EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class StudyItem extends Component {
    constructor(props){
        super(props);
        this.listRef = React.createRef();
            this.state = {
                id:props.match.params.id,
                title:props.match.params.title,
                editorState:{},
        }

    }
    render() {
        console.log(this.state.editorState);
        let { content } = this.state;
        const noData = (
            <div className={classname(homeStyle.container, style.noData)}>
                无数据
            </div>
        );
        const data =()=>{
            if(!content){
                return
            }else{
                let list =()=>{
                    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
                };
                return(
                    <div className={ classname(homeStyle.container,style.box)}>
                        <h3 className={ style.title }>
                            { content.title }
                        </h3>
                        <div dangerouslySetInnerHTML = {{ __html: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}}>

                        </div>
                    </div>
                )
            }
        } ;

        return (
            <div>
                {content ? data() : noData}
                <Beian />
            </div>
        )
    }
    componentDidMount() {
        if(Cookie.load("lqp336699_userId")){
            this.props.tokenAction();
        }
        const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

        fetch(`${url}/${this.state.id}/${this.state.title}/content`,{
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res=>{
            res.json().then(data=>{
                this.setState({
                    content:data[0],
                    editorState:EditorState.createWithContent(convertFromRaw(data[0].data))
                });
                console.log(this.listRef);
            })
        });
    }
}

export default connect(null,{ tokenAction })(StudyItem);
