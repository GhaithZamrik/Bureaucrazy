import * as types from './actionTypes';
import documentApi from '../api/mockDocumentApi';

export function loadDocumentsSuccess(documents) {
    return { type: types.LOAD_DOCUMETNS_SUCCESS, documents};
} // this action doesn't fire untill all documents authors have been successfully loaded, beccause it's an asynchronous call.

export function loadDocuments() {
    return function (dispatch) {
        return documentApi.getAllDocuments().then(documents => {
            dispatch(loadDocumentsSuccess(documents));
        }).catch(error => {
            throw(error);
        });
    };
}