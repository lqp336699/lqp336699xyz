import { combineReducers } from 'redux'
import { getStudyList } from './getStudyList'
import { StudyDetailReducer } from './../reducer/getStudyDetail'
import { saveUserReducer } from './loginRegister'
import { music } from './../reducer/music'

const rootReducer = combineReducers({
    getStudyList,StudyDetailReducer,saveUserReducer,music
});

export default rootReducer;
