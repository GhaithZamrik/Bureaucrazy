import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function documentReducer(state = initalState.documents, action) {
    switch(action.type) {
        case types.LOAD_DOCUMETNS_SUCCESS:
            return action.documents;

        case types.CREATE_DOCUMENT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.document)
            ];

        case types.UPDATE_DOCUMENT_SUCCESS:
            return [
                ...state.filter(document => document.id !== action.document.id),
                Object.assign({}, action.document)
            ];


    default:
        return state;
    }
}