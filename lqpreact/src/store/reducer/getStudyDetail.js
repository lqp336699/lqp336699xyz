import { GET_STUDY_LIST } from './../container/index'

const StudyDetailReducer = (state=[],action={})=>{
    switch (action.type) {
        case GET_STUDY_LIST :{
            const state = action.payload;
            return [ ...state ]
        }
        default:return state;
    }
};

export default StudyDetailReducer;
