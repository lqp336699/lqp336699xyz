import { HOME_USERID,REMOVE_USER } from './../container/index'
const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

const myHeaders = new Headers({
    "Content-Type": "text/plain",
});

export const saveUserId =(username)=> {
    return (dispatch) => {
      return  fetch(`${url}/api/home/userInfo/${username}`, {
            headers: myHeaders
        }).then(res => {
            res.json().then(data=>{
                dispatch(hanelSaveUserId(data))
            })
        })
    }
};

const hanelSaveUserId = (res)=>{
    return{
        type: HOME_USERID ,
        payload:res
    }
};

export const removeUser = ()=>{
  return{
      type: REMOVE_USER ,
      payload:{}
  }
};
