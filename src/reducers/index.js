import {combineReducers} from 'redux';
import documents from './documentReducer';

const rootReducer = combineReducers({
    documents //short hand property name //this si the choice that we have made
});

export default rootReducer;