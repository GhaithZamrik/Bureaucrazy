import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function documentReducer(state = initalState.documents, action) {
    switch(action.type) {
        case types.LOAD_DOCUMETNS_SUCCESS:
            return action.documents;

    default:
        return state;
    }
}