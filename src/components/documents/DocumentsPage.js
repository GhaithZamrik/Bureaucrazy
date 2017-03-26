import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';
import DocumentList from './DocumentList';

class DocumentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    documentRow(document, index) {
        return <div key={index}>{document.title}</div>;
    }
    render() {
        const {documents} = this.props;
        return (
            <div>
                <h1>Documents</h1>
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
export default connect(mapStateToProps, mapDispatchToProps) (DocumentsPage);
