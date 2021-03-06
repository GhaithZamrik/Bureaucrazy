import {combineReducers} from 'redux';
import documents from './documentReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
    documents,
    authors, //short hand property name //this si the choice that we have made
    ajaxCallsInProgress
});

export default rootReducer;

//we have to add any new reducer that we create to our root reducer, which is this one