import { combineReducers } from 'redux'
import getStudyList from './../reducer/study'
import StudyDetailReducer from './../reducer/getStudyDetail'
import regestReducer from './../reducer/register'
import { saveUserReducer } from './../reducer/home'

const rootReducer = combineReducers({
    getStudyList,StudyDetailReducer,regestReducer,saveUserReducer
});

export default rootReducer;
