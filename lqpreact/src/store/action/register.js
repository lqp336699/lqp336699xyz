import { REGISTER } from './../container/index'

const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

const registerAction = (data)=>{
    return(dispatch)=>{
       return fetch(`${url}/api/register`,{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({...data})
    }).then(res=>{
        let res3 = res.clone();
        if(res.statusText === 'OK'){
            res.json().then(res2=>{
                dispatch(handelRegister(res2));
            });
        }
        return res3;
    })
}};

const handelRegister = (res)=>{
    return{
        type:REGISTER,
        payload:res
    }
};

export default registerAction;
