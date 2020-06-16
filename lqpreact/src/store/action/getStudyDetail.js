import { GET_STUDY_DETAIL } from './../container/index'
import { SET_PIN_LUN } from './../container/index'
import { GET_PIN_LUN } from './../container/index'

const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

export const getStudyDetail = (id)=>{
    return(dispatch)=>{
      return  fetch(`${url}/api/study/lesson/${id}`,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
        }).then(res=>{
            let res3 = res.clone()
            res.json().then(res2=>{
                dispatch(handelStudyDetail({"data":res2 }));
            });
            return res3;
        })
    }
};

const handelStudyDetail = (res)=>{
    return{
        payload:res,
        type:GET_STUDY_DETAIL
    }
};

export const setPinLun=(comments)=>{
    return(dispatch)=>{
        fetch(`${url}/api/study/pinLun`,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(comments)
        }).then(res=>{
            console.log(res);
            res.json().then(res2=>{
                console.log(res2);
                dispatch(handelPinLun(res2))
            })
        })
    }
};

const handelPinLun = (res)=>{
    return{
        payload:res,
        type:SET_PIN_LUN
    }
};

export const getPinLun=(id)=>{
    return(dispatch)=>{
      return   fetch(`${url}/api/study/getPinLun`,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
        }).then(res=>{
            let res3 = res.clone();
            res.json().then(res2=>{
                dispatch(handelGetPinLun({"res":res2}));
            });
          return res3;
      })
    }
};

const handelGetPinLun = (res)=>{
    return{
        payload:res,
        type:GET_PIN_LUN
    }
};
