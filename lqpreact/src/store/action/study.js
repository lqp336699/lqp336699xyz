import { GET_STUDY_LIST } from './../container/index'

const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';

const myHeaders = new Headers({
    "Content-Type": "text/plain",
});

const getStudyList = ()=>{
    return (dispatch)=>{
       return  fetch(`${url}/api/home/study`,
            {
            headers:myHeaders
            }).then(res=>{
            let res3 = res.clone();
            res.json().then(res2=>{
                dispatch(handelStudyList(res2));
            });
           return res3;
       })
    }
};

const handelStudyList =(res)=>{
    return{
        type: GET_STUDY_LIST ,
        payload:res
    }
};

export default getStudyList;
