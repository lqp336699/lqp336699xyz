import { GET_STUDY_LIST } from './../container/index'

const url = process.env.NODE_ENV !== 'development' ?  'http://lqp336699.xyz' :'http://localhost:5000';



const getStudyDetail = (id)=>{
    return(dispatch)=>{
        fetch(`${url}/api/study/${id}`,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
        }).then(res=>{
            res.json().then(res2=>{
                dispatch(handelStudyDetail(res2))
            })
        })
    }
};

const handelStudyDetail = (res)=>{
    return{
        payload:res,
        type:GET_STUDY_LIST
    }
};


export default getStudyDetail;
