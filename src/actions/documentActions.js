import * as types from './actionTypes';
import DocumentApi from '../api/mockDocumentApi';

export function loadDocumentsSuccess(documents) {
    return { type: types.LOAD_DOCUMENTS_SUCCESS, documents};
} // this action doesn't fire untill all documents authors have been successfully loaded, beccause it's an asynchronous call.

export function updateDocumentSuccess(document) {
    return {type: types.UPDATE_DOCUMENT_SUCCESS, document};
}

export function createDocumentSuccess(document) {
    return {type: types.CREATE_DOCUMENT_SUCCESS, document};
}

export function loadDocuments() {
    return function(dispatch) {
        return DocumentApi.getAllDocuments().then(documents => {
            dispatch(loadDocumentsSuccess(documents));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveDocument(document) {            //we are passing the document here as a parameter
    return function (dispatch, getState) {          //the optional parameter gerState is used when you are wanting 
        return DocumentApi.saveDocument(document).then(savedDocument => {
            document.id ? dispatch(updateDocumentSuccess(savedDocument)) :
            dispatch(createDocumentSuccess(savedDocument)); //depending on whether there's an id for the document we are either updating a document or creating a document
        }).catch(error => {
            throw(error);
        });
    };
}

 //to access the reduc store and get a particular pieces of state, without having to pass it in as a parameter