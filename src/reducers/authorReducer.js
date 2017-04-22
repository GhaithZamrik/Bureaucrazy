import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function authorReducer(state = initalState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

    default:
        return state;
    }
}

//the state here is an array, because we're going to deal with an array of author names