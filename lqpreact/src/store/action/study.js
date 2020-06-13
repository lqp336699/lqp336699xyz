import { GET_STUDY_LIST } from './../container/index'

const getStudyList = ()=>{
    return (dispatch)=>{
       return  fetch('http://localhost:5000/api/study/getStudyList',
            {
            headers:{
                'Content-Type': 'application/json'
            }
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
