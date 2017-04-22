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
                allAuthors={this.props.authors}
                document={this.state.document}
                errors={this.state.errors}
            />
        );
    }
}

ManageDocumentPage.propTypes = {
    document: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let document = {id: '', watchHerf: '', title: '', authorId: '', length: '', category: ''};

    const authorsFormattedForDropdown = state.authors.map( author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        document: document,
        authors: authorsFormattedForDropdown
    };
}
// mapstatetoprops is the place where we can do any data transformation, in order to fit our model.
//in the const as a function that we have above we do the transforamtion of the author data, to fit our model, as in selectinput from the initialState 
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch) //this will make all the actions available for this container component under this.props.actions
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(ManageDocumentPage);
