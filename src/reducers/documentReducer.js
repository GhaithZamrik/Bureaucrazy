import * as types from '../actions/actionTypes';
export default function documentReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_DOCUMETNS_SUCCESS:
            return action.documents;

    default:
        return state;
    }
}