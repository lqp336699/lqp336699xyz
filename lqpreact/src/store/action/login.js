import { HOME_USERID } from './../container/index';

const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

const myHeaders = new Headers({
    "Content-Type": "application/json",
});

export const loginAction =(userData)=> {
    return (dispatch) => {
        return  fetch(`${url}/api/login`, {
            method:"post",
            headers: myHeaders,
            body:JSON.stringify(userData)
        }).then(res => {
           let res3 = res.clone();
            res.json().then(data=>{
                dispatch(hanelLogin(data))
            });
            return res3;
        })
    }
};

const hanelLogin = (res)=>{
    return{
        type: HOME_USERID ,
        payload:res
    }
};

