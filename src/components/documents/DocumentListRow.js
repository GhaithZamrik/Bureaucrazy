import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DocumentListRow = ({document}) => {
    return (
        <tr>
            <td><a herf={document.watchHref} target="_blank">Read</a></td>
            <td><Link to={'/PDFs/' + document.id}>{document.title}</Link></td>
            <td>{document.authorId}</td>
            <td>{document.category}</td>
            <td>{document.length}</td>
        </tr>
    );
};

DocumentListRow.propTypes = {
    document: PropTypes.object.isRequired
};

export default DocumentListRow;