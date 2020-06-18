import { GET_STUDY_LIST } from './../container/index'


export const getStudyList = (state=[],action={}) =>{
    switch (action.type) {
        case GET_STUDY_LIST:{
           let data = action.payload;
            return [ ...data ];
        }
        default:return state;
    }
};

