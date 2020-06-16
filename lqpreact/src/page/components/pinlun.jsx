import React, {Component} from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { connect } from 'react-redux'
import Cookie from "react-cookies";
import { setPinLun } from './../../store/action/getStudyDetail'
import { getPinLun } from './../../store/action/getStudyDetail'
import pinLunStyle from './pinLun.css'


const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        className={pinLunStyle.lqp}
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? '个评论' : '个评论'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

// const Editor = ({ onChange, onSubmit, submitting, value }) => (
//     <>
//         <Form.Item>
//             <TextArea rows={4} onChange={onChange} value={value} />
//         </Form.Item>
//         <Form.Item>
//             <Button  htmlType="submit" loading={ submitting } onClick={ onSubmit } type="primary">
//                 发表你的意见
//             </Button>
//         </Form.Item>
//     </>
// );

class Pinlun extends Component {
    constructor(props){
        super(props);
        this.state = {
            bTS:false,
            comments: [],
            submitting: false,
            value: '',
        };
    }
    render() {

        console.log(this.props.userInfo);

        const { comments, submitting, value } = this.state;
        const { tx, username } = this.props.userInfo;
        console.log(this.props.userInfo);
        return (
            <>
                {comments.length > 0 && <CommentList  comments={comments} />}
                <Comment
                    avatar={
                        <Avatar
                            src={tx}
                            alt={username}
                        />
                    }
                    content={
                        <>
                            <Form.Item>
                                <TextArea rows={4} onChange={this.handleChange} value={value} />
                            </Form.Item>
                            <Form.Item>
                                <Button disabled={ username ? false : true }  htmlType="submit" loading={ submitting } onClick={ this.handleSubmit.bind(this,{tx,username}) } type="primary">
                                    { username ? "发表你的意见" : "请登录" }
                                </Button>
                            </Form.Item>
                        </>

                        // <Editor
                        //
                        //     onChange={this.handleChange}
                        //     onSubmit={this.handleSubmit.bind(this,{tx,username})}
                        //     submitting={submitting}
                        //     value={value}
                        // />
                    }
                />
            </>
        );
    }

    componentDidMount() {
        this.props.getPinLun(this.props.lesson).then(res=>{
                res.json().then(res2=>{
                    let a =[];
                    res2.map(item=>{
                        item.content=<p>{item.content.props.children}</p>;
                        a.push(item)
                    });
                    this.setState({
                        comments:a,
                    });
                })
        })
    }


    handleSubmit = (data) => {
        if(Cookie.load("lqp336699_userId")){
            if (!this.state.value) {
                return;
            }
            this.setState({
                submitting: true,
            });
            let {tx,username} = data;
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let comments =[
                {
                    author: username,
                    avatar: tx,
                    content: <p>{this.state.value}</p>,
                    datetime:date,
                    id:this.props.lesson
                },
                ...this.state.comments
            ];
            this.props.setPinLun( {
                author: username,
                avatar: tx,
                content: <p>{this.state.value}</p>,
                datetime:date,
                id:this.props.lesson
            });
            setTimeout(() => {
                this.setState({
                    submitting: false,
                    value: '',
                    comments,
                });
            }, 500);
        }
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
}

const mapStateToProps = (store)=>{
    return{
        userInfo:store.saveUserReducer,
        pinLun:store.StudyDetailReducer.PinLun
    }
};

export default connect(mapStateToProps,{ setPinLun,getPinLun })(Pinlun);
