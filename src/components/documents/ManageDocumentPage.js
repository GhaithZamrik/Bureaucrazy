import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';
import DocumentForm from './DocumentForm';
// you can have only one top level component in jsx
class ManageDocumentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
//we need to pass down mutable state to out container component.
        this.state = {
            document: Object.assign({}, props.document),
            errors: {}
        };
    }
    render() {
        return (
            <DocumentForm
                allAuthors={[]}
                document={this.state.document}
                errors={this.state.errors}
            />
        );
    }
}

ManageDocumentPage.PropTypes = {
    document: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let document = {id: '', watchHerf: '', title: '', authorId: '', length: '', category: ''};
    return{
        document: document
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch) //this will make all the actions available for this container component under this.props.actions
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(ManageDocumentPage);
