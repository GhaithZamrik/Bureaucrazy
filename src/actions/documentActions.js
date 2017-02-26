import * as types from './actionTypes';
export function createDocument(document) {
    return { type: types.CREATE_DOCUMENT, document};
}