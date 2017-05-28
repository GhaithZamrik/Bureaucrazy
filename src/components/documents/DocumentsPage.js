import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';
import DocumentList from './DocumentList';
import {browserHistory} from 'react-router';

class DocumentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddDocumentPage = this.redirectToAddDocumentPage.bind(this);
    }

    documentRow(document, index) {
        return <div key={index}>{document.title}</div>;
    }

    redirectToAddDocumentPage() {
        browserHistory.push('/PDFs');
    }

    render() {
        const {documents} = this.props;

        return (
            <div>
                <h1>Documents</h1>
                <input  type="submit"
                        value="Submit Document"
                        className="btn btn-primary"
                        onClick={this.redirectToAddDocumentPage}/>   
                <DocumentList documents={documents}/>
            </div>
        );
    }
}

DocumentsPage.propTypes = {

    documents: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        documents: state.documents // this property is determind by the choice that we have made inside of our reducers 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
