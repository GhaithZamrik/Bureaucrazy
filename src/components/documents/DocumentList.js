import React, {PropTypes} from 'react';
import DocumentListRow from './DocumentListRow';

const DocumentList = ({documents}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {documents.map(document =>
                <DocumentListRow key={document.id} document={document}/>
            )}
            </tbody>
        </table>
    );
};

DocumentList.propTypes = {
    documents: PropTypes.array.isRequired
};

export default DocumentList;