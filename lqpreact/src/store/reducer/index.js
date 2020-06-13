import { combineReducers } from 'redux'
import getStudyList from './../reducer/study'
import StudyDetailReducer from './../reducer/getStudyDetail'

const rootReducer = combineReducers({
    getStudyList,StudyDetailReducer
});

export default rootReducer;
