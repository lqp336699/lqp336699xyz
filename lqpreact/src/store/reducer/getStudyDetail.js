import { GET_STUDY_DETAIL } from './../container/index'
import { SET_PIN_LUN } from './../container/index'
import { GET_PIN_LUN } from './../container/index'

const StudyDetailReducer = (state={},action={})=>{
    switch (action.type) {
        case GET_STUDY_DETAIL :{
            return Object.assign({},state,{
                "studyDetail":action.payload
            })
        }
        case SET_PIN_LUN:{
            return { ...state }
        }
        case GET_PIN_LUN:{
            return Object.assign({},state,{
                PinLun:action.payload
            })
        }
        default:return state;
    }
};

export default StudyDetailReducer;
