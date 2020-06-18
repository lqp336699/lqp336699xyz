import React, {Component} from 'react';
import classname from "classnames";
import style from "../home/css/home.css";
import lqpStyle from "./lqp.css";
import { connect } from 'react-redux'
import { musicAction } from './../../store/action/music'
import {music} from "../../store/reducer/music";


class Lqp extends Component {
    constructor(props){
        super(props);
        this.state={
            music :false,
        }
    }
    render() {
        return (
                <div className={classname(style.container,lqpStyle.pb)} onClick={this.playMusic}>
                    <audio  ref='audio' >
                        <source src='/media/lqp.mp3' />
                    </audio>
                    <div className={classname( lqpStyle.lqp,this.props.music ? lqpStyle.lqpbg : lqpStyle.lqp)}>
                        李清平的人个网站(music)
                    </div>
                </div>
        )
    }

    componentDidMount() {
        console.log(this.refs.audio.ended);
        this.props.music ? this.refs.audio.play() : this.refs.audio.pause();
    }

    playMusic=()=>{
        this.setState({
           music : !this.state.music
        });
        setTimeout(()=>{
            this.props.musicAction(this.state.music);
            this.props.music ? this.refs.audio.play() : this.refs.audio.pause();
        },1);
    }
}

const mapStateToProps =(store)=>{
    return{
        music:store.music.music
    }
};

export default connect(mapStateToProps,{ musicAction })(Lqp);
