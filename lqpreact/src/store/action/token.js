import { HOME_USERID } from './../container/index';
import Cookies from 'react-cookies'
const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

export const tokenAction = (token)=>{
    return (dispatch)=>{
        fetch(`${url}/user/login`,{
            headers:{
                'Content-Type':'application/json',
                'Authorization': Cookies.load("lqp336699_userId").token
            }
        }).then(res=>{
            res.json().then(userInfo=>{
                dispatch(hanelLogin(userInfo))
            })
        })
    }
};

const hanelLogin = (res)=>{
    return{
        type: HOME_USERID ,
        payload:res
    }
};
