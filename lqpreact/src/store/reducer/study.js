import { GET_STUDY_LIST } from './../container/index'


const getStudyList = (state=[],action={}) =>{
    switch (action.type) {
        case GET_STUDY_LIST:{
            state=action.payload;
            return state;
        }
        default:return state;
    }
};

export default getStudyList;
