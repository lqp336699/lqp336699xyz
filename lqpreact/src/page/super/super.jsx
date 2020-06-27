import React, {Component} from 'react';
import homeStyle from './../home/css/home.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import classname from 'classnames'
import style from './super.css'
import Cookie from "react-cookies";
import { Input } from 'antd';
import { Button ,notification } from 'antd';
import { connect } from 'react-redux'
import { tokenAction } from './../../store/action/token'
//富文本
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
class Super extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
            title:'',
            lesson:''
        }
    }
    render() {

        return (
            <div className={classname(homeStyle.container,style.box)}>
                <Input placeholder="分类" className={style.title} onChange={e=>this.setState({
                    lesson:e.target.value
                })} />
                <Input placeholder="标题" className={style.title} onChange={e=>this.setState({
                    title:e.target.value
                })} />
                    <Editor
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onContentStateChange={this.onContentStateChange}
                    />
                <Button type="primary"  onClick={this.studySubmit}>提交</Button>
            </div>
        )
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState
        });
    };

    studySubmit = ()=> {
        const url = process.env.NODE_ENV !== 'development' ? 'http://lqp336699.xyz' : 'http://localhost:5000';
        fetch(`${url}/superUser/saveLesson`, {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({lesson:this.state.lesson,title:this.state.title,data:this.state.contentState})
        })
            .then(res => {
                if(res.statusText==='OK'){
                    notification.open({
                        message: '你好6啊',
                        description:
                            '提交成功',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    });
                }else{
                    notification.open({
                        message: '啊啊啊啊',
                        description:
                            '提交失败',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    });
                }
            });
    }
}

export default connect(null,{ tokenAction })(Super);
